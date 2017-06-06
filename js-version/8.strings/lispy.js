/**
 * Created by shenyin.sy on 17/5/24.
 */
"use strict";
const Lval = require('./ast').Lval;
const Env = require('./ast').Env;
const tree = require('treeify');
const Parser = require('./parser').Parser;
const lval_sexpr = require('./ast').lval_sexpr;
const ltype_name = require('./ast').ltype_name;
const lval_err = require('./ast').lval_err;
const lval_num = require('./ast').lval_num;
const lval_qexpr = require('./ast').lval_qexpr;
const lval_lambda = require('./ast').lval_lambda;


Function.prototype.mybind = function (oThis) {
    if (typeof this !== 'function') {
        // closest thing possible to the ECMAScript 5
        // internal IsCallable function
        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP = function () {
        },
        fBound = function () {

            var bound = fToBind.apply(this instanceof fNOP
                    ? this
                    : oThis,
                aArgs.concat(Array.prototype.slice.call(arguments)));
            return bound;
        };

    if (this.prototype) {
        // Function.prototype doesn't have a prototype property
        fNOP.prototype = this.prototype;
    }
    fBound.prototype = new fNOP();
    fBound.original = this;
    return fBound;
};

Function.prototype.bindEqual = function (f) {
    return this.original && f.original && this.original === f.original ? 1 : 0; // true
};

////////////////////////////////////////////////
function Lispy() {
    this.root_env = new Env();
    this.lenv_add_builtins(this.root_env);
};

Lispy.prototype.start_eval = function (line) {

    //1. create antlr tree
    const parser = new Parser(line);
    let errors = parser.errors();
    if(errors.length !== 0){
        return lval_err(JSON.stringify(errors,null,'\t'));
    }
    //2. convert to ast, get lval
    parser.startWalk(parser.tree);

    return this.eval(this.root_env, parser.root);
};

//e is env, v is lval
Lispy.prototype.eval = function (e, v) {
    let r = v;

    if (v.type === Lval.SYM) {
        r = e.get(v);
    }
    else if (v.type === Lval.SEXPR) {
        r = this.eval_sexpr(e, v);
    }
    return r;
};

Lispy.prototype.eval_sexpr = function (e, v) {

    for (let i = 0; i < v.count(); i++) {
        v.cell[i] = this.eval(e, v.cell[i]);
    }

    for (let i = 0; i < v.count(); i++) {
        if (v.cell[i].type === Lval.ERR) {
            return v.cell[i];
        }
    }

    if (v.count() == 0) {
        return v;
    }

    if (v.count() == 1) {
        return v.cell[0];
    }

    let f = v.pop(0);
    if (f.type !== Lval.FUN) {
        let r = lval_err(`S-Expression starts with incorrect type. Got ${ltype_name(f.type)}, Expected ${ ltype_name(Lval.FUN)}.`);
        return r;
    }

    /* Call builtin with operator */
    let result = this.lval_call(e, f, v);
    return result;

};

/* Evaluation */
Lispy.prototype.lval_call = function (e, f, a) {
    /* If Builtin then simply apply that */
    if (f.builtin) {
        return f.builtin(e, a);
    }

    /* Record Argument Counts */
    let given = a.count();
    let total = f.formals.count();

    /* While arguments still remain to be processed */
    while (a.count()) {
        /* If we've ran out of formal arguments to bind */
        if (f.formals.count() == 0) {
            return lval_err(`Function passed too many arguments. Got ${given}, Expected ${total}.`);
        }

        /* Pop the first symbol from the formals */
        let sym = f.formals.pop(0);

        /* Special Case to deal with '&' */
        if (sym.sym === "&") {

            /* Ensure '&' is followed by another symbol */
            if (f.formals.count() != 1) {
                return lval_err(`Function format invalid. Symbol '&' not followed by single symbol.`);
            }

            /* Next formal should be bound to remaining arguments */
            let nsym = f.formals.pop(0);
            f.env.put(nsym, this.builtin_list(e, a));
            break;
        }

        /* Pop the next argument from the list */
        let val = a.pop(0);

        /* Bind a copy into the function's environment */
        f.env.put(sym, val);
    }

    /* If '&' remains in formal list bind to empty list */
    if (f.formals.count() > 0
        && f.formals.cell[0].sym === "&") {

        /* Check to ensure that & is not passed invalidly. */
        if (f.formals.count() != 2) {
            return lval_err("Function format invalid. Symbol '&' not followed by single symbol.");
        }

        /* Pop and delete '&' symbol */
        f.formals.pop(0);

        /* Pop next symbol and create empty list */
        let sym = f.formals.pop(0);
        let val = lval_qexpr();

        /* Bind to environment and delete */
        f.env.put(sym, val);
    }

    /* If all formals have been bound evaluate */
    if (f.formals.count() === 0) {

        /* Set environment parent to evaluation environment */
        f.env.par = e;

        /* Evaluate and return */
        return this.builtin_eval(f.env, lval_sexpr().add(f.body.copy()));
    } else {
        /* Otherwise return partially evaluated function */
        return f.copy();
    }
};

//e is env, a is lval
Lispy.prototype.builtin_add = function (e, a) {
    return this.builtin_op(e, a, "+");
};
Lispy.prototype.builtin_sub = function (e, a) {
    return this.builtin_op(e, a, "-");
};
Lispy.prototype.builtin_mul = function (e, a) {
    return this.builtin_op(e, a, "*");
};
Lispy.prototype.builtin_div = function (e, a) {
    return this.builtin_op(e, a, "/");
};

//e is env, name is function name, func is function
Lispy.prototype.lenv_add_builtin = function (e, name, func) {
    let key = new Lval();
    key.sym = name;
    key.type = Lval.SYM;

    let value = new Lval();
    value.type = Lval.FUN;
    value.builtin = func.mybind(this);

    e.put(key, value);
};
Lispy.prototype.lenv_add_builtins = function (e) {
    this.lenv_add_builtin(e, "list", this.builtin_list);
    this.lenv_add_builtin(e, "head", this.builtin_head);
    this.lenv_add_builtin(e, "tail", this.builtin_tail);
    this.lenv_add_builtin(e, "eval", this.builtin_eval);
    this.lenv_add_builtin(e, "join", this.builtin_join);

    /* Mathematical Functions */
    this.lenv_add_builtin(e, "+", this.builtin_add);
    this.lenv_add_builtin(e, "-", this.builtin_sub);
    this.lenv_add_builtin(e, "*", this.builtin_mul);
    this.lenv_add_builtin(e, "/", this.builtin_div);

    /* Variable Functions */
    this.lenv_add_builtin(e, "def", this.builtin_def);
    this.lenv_add_builtin(e, "\\", this.builtin_lambda);
    this.lenv_add_builtin(e, "=", this.builtin_put);

    /* Comparison Functions */
    this.lenv_add_builtin(e, "if", this.builtin_if);
    this.lenv_add_builtin(e, "==", this.builtin_eq);
    this.lenv_add_builtin(e, "!=", this.builtin_ne);
    this.lenv_add_builtin(e, ">", this.builtin_gt);
    this.lenv_add_builtin(e, "<", this.builtin_lt);
    this.lenv_add_builtin(e, ">=", this.builtin_ge);
    this.lenv_add_builtin(e, "<=", this.builtin_le);
};
Lispy.prototype.builtin_def = function (e, a) {
    return this.builtin_var(e, a, "def");

};
Lispy.prototype.builtin_put = function (e, a) {
    return this.builtin_var(e, a, "=");
};

//e is env, a is lval
//def {a b} 5 6
Lispy.prototype.builtin_var = function (e, a, func) {
    if (a.cell[0].type != Lval.QEXPR) {
        return lval_err(`Function '${func}' passed incorrect type for argument 0. Got ${ltype_name(a.cell[0].type)}, Expected Q-Expression.`);
    }

    let syms = a.cell[0];

    /* Ensure all elements of first list are symbols */
    for (let i = 0; i < syms.count(); i++) {
        if (syms.cell[i].type !== Lval.SYM) {
            return lval_err(`Function '${func}' cannot define non-symbol. Got ${ltype_name(a.cell[i].type)}, Expected ${ltype_name(Lval.SYM)}.`);
        }
    }

    /* Check correct number of symbols and values */
    if (syms.count() !== a.count() - 1) {
        return lval_err(`Function ''${func}' passed too many arguments for symbols. Got ${a.count() - 1}, Expected ${syms.count()}.`);
    }

    /* Assign copies of values to symbols */
    for (let i = 0; i < syms.count(); i++) {
        /* If 'def' define in globally. If 'put' define in locally */
        if (func === "def") {
            e.def(syms.cell[i], a.cell[i + 1]);
        }

        if (func === "=") {
            e.put(syms.cell[i], a.cell[i + 1]);
        }
    }

    return lval_sexpr();
};


Lispy.prototype.builtin_lambda = function (e, a) {
    /* Check Two arguments, each of which are Q-Expressions */
    if (a.count() != 2) {
        return lval_err(`Function '\\' passed incorrect number of arguments. Got ${a.count()}, Expected 2.`);
    }

    if (a.cell[0].type != Lval.QEXPR) {
        return lval_err(`Function '\\' passed incorrect type for argument 1. Got ${ltype_name(a.cell[0].type)}, Expected Q-Expression.`);
    }

    if (a.cell[1].type != Lval.QEXPR) {
        return lval_err(`Function '\\' passed incorrect type for argument 2. Got ${ltype_name(a.cell[1].type)}, Expected Q-Expression.`);
    }

    /* Check first Q-Expression contains only Symbols */
    for (let i = 0; i < a.cell[0].count(); i++) {
        if (a.cell[0].cell[i].type !== Lval.SYM) {
            return lval_err(`Cannot define non-symbol. Got ${ltype_name(a.cell[0].cell[i].type)}, Expected ${ltype_name(Lval.SYM)}.`);
        }
    }

    /* Pop first two arguments and pass them to lval_lambda */
    let formals = a.pop(0);
    let body = a.pop(0);

    return lval_lambda(formals, body);
};


Lispy.prototype.builtin_list = function (e, v) {
    v.type = Lval.QEXPR;
    return v;
};

Lispy.prototype.builtin_head = function (e, a) {
    /* Check Error Conditions */
    let r;
    do {
        if (a.count() != 1) {
            r = lval_err(`Function 'head' passed incorrect number of arguments. Got ${a.count()}, Expected 1.`);
            break;
        }

        if (a.cell[0].type != Lval.QEXPR) {
            r = lval_err(`Function 'head' passed incorrect type for argument 1. Got ${ltype_name(a.cell[0].type)}, Expected Q-Expression.`);
            break;
        }

        if (a.cell[0].count() == 0) {
            r = lval_err("Function 'head' passed {}!");
            break;
        }

        /* Otherwise take first argument */
        r = a.take(0);

        /* Delete all elements that are not head and return */
        while (r.count() > 1) {
            r.del(1, r.cell.length);
        }
    } while (false);
    return r;
};

Lispy.prototype.builtin_tail = function (e, a) {
    let r;
    do {
        if (a.count() != 1) {
            r = lval_err(`Function 'tail' passed incorrect number of arguments. Got ${a.count()}, Expected 1.`);
            break;
        }

        if (a.cell[0].type != Lval.QEXPR) {
            r = lval_err(`Function 'tail' passed incorrect type for argument 1. Got ${ltype_name(a.cell[0].type)}, Expected Q-Expression.`);
            break;
        }

        if (a.cell[0].count() == 0) {
            r = lval_err("Function 'tail' passed {}!");
            break;
        }
        //input is tail {1 2 3 }
        //sym 'tail' has been removed，so cell[0] is {1 2 3 }
        r = a.take(0);
        r.del(0, 1);

    } while (false);
    return r;
};

Lispy.prototype.builtin_join = function (e, a) {
    //input is join {1 2 3 } {4 5 6} {7 8}
    //sym 'join' has been removed，so a.cell[0] is {1 2 3 }, cell[1] is {4 5 6 }

    for (let i = 0; i < a.count(); i++) {
        if (a.cell[i].type !== Lval.QEXPR) {
            return lval_err(`Function 'tail' passed incorrect type for argument ${i}. Got ${ltype_name(a.cell[i].type)}, Expected Q-Expression.`);
        }
    }

    let x = a.pop(0);

    while (a.count() > 0) {
        x = x.join(a.pop(0));
    }

    return x;
};

Lispy.prototype.builtin_eval = function (e, a) {
    let r;
    do {
        if (a.count() != 1) {
            r = lval_err(`Function 'eval' passed incorrect number of arguments. Got ${a.count()}, Expected 1.`);
            break;
        }

        if (a.cell[0].type != Lval.QEXPR) {
            r = lval_err(`Function 'eval' passed incorrect type for argument 1. Got ${ltype_name(a.cell[0].type)}, Expected Q-Expression.`);
            break;
        }


        let x = a.take(0);
        x.type = Lval.SEXPR;
        r = this.eval(e, x);
    } while (false);
    return r;
};


Lispy.prototype.builtin_op = function (e, a, op) {
    for (let i = 0; i < a.count(); i++) {
        if (a.cell[i].type !== Lval.NUM) {
            return lval_err("Cannot operate on non-number!");
        }
    }

    let x = a.pop(0);
    if (op === '-' && a.count() === 0) {
        x.num = -x.num;
    }

    while (a.count() > 0) {
        let y = a.pop(0);
        if (op === '+') {
            x.num += y.num;
        }
        if (op === '-') {
            x.num -= y.num;
        }
        if (op === '*') {
            x.num *= y.num;
        }
        if (op === '/') {
            x.num /= y.num;
        }
    }

    return x;
};

Lispy.prototype.builtin_ord = function (e, a, op) {
    if (a.count() != 2) {
        return lval_err(`Function '${op}' passed incorrect number of arguments. Got ${a.count()}, Expected 2.`);
    }

    if (a.cell[0].type != Lval.NUM) {
        return lval_err(`Function '${op}' passed incorrect type for argument 1. Got ${ltype_name(a.cell[0].type)}, Expected ${ltype_name(Lval.NUM)}.`);
    }

    if (a.cell[1].type != Lval.NUM) {
        return lval_err(`Function '${op}' passed incorrect type for argument 2. Got ${ltype_name(a.cell[1].type)}, Expected ${ltype_name(Lval.NUM)}.`);
    }

    let r;
    if (op === ">") {
        r = a.cell[0].num > a.cell[1].num ? 1 : 0;
    } else if (op === "<") {
        r = a.cell[0].num < a.cell[1].num ? 1 : 0;
    } else if (op === ">=") {
        r = a.cell[0].num >= a.cell[1].num ? 1 : 0;
    } else if (op === "<=") {
        r = a.cell[0].num <= a.cell[1].num ? 1 : 0;
    }
    return lval_num(r);
};

Lispy.prototype.builtin_gt = function (e, a) {
    return this.builtin_ord(e, a, ">");
};


Lispy.prototype.builtin_lt = function (e, a) {
    return this.builtin_ord(e, a, "<");
};

Lispy.prototype.builtin_ge = function (e, a) {
    return this.builtin_ord(e, a, ">=");
};

Lispy.prototype.builtin_le = function (e, a) {
    return this.builtin_ord(e, a, "<=");
};

Lispy.prototype.builtin_cmp = function (e, a, op) {
    if (a.count() != 2) {
        return lval_err(`Function '${op}' passed incorrect number of arguments. Got ${a.count()}, Expected 2.`);
    }

    let r;
    if (op === "==") {
        r = a.cell[0].eq(a.cell[1]) ? 1 : 0;
    }
    if (op === "!=") {
        r = !a.cell[0].eq(a.cell[1]) ? 1 : 0;
    }
    return lval_num(r);

};

Lispy.prototype.builtin_eq = function (e, a) {
    return this.builtin_cmp(e, a, "==");
};

Lispy.prototype.builtin_ne = function (e, a) {
    return this.builtin_cmp(e, a, "!=");
};
Lispy.prototype.builtin_if = function (e, a) {
    if (a.count() != 3) {
        return lval_err(`Function 'if' passed incorrect number of arguments. Got ${a.count()}, Expected 3.`);
    }

    if (a.cell[0].type != Lval.NUM) {
        return lval_err(`Function 'if' passed incorrect type for argument 1. Got ${ltype_name(a.cell[0].type)}, Expected ${ltype_name(Lval.NUM)}.`);
    }

    if (a.cell[1].type != Lval.QEXPR) {
        return lval_err(`Function 'if' passed incorrect type for argument 2. Got ${ltype_name(a.cell[1].type)}, Expected ${ltype_name(Lval.QEXPR)}.`);
    }

    if (a.cell[2].type != Lval.QEXPR) {
        return lval_err(`Function 'if' passed incorrect type for argument 2. Got ${ltype_name(a.cell[2].type)}, Expected ${ltype_name(Lval.QEXPR)}.`);
    }

    /* Mark Both Expressions as evaluable */
    let x;
    a.cell[1].type = Lval.SEXPR;
    a.cell[2].type = Lval.SEXPR;

    if (a.cell[0].num) {
        /* If condition is true evaluate first expression */
        x = this.eval(e, a.pop(1));
    } else {
        /* Otherwise evaluate second expression */
        x = this.eval(e, a.pop(2));
    }

    /* Delete argument list and return */
    return x;
}


Lispy.prototype.printTree = function (v) {
    console.log(tree.asTree(v, true));
};


Lispy.prototype.println = function (v) {
    this.print(v);
    console.log('\n');
    // process.stdout.end();
};

Lispy.prototype.print = function (v) {
    this.log(v.value());
};
Lispy.prototype.log = function (str) {
    process.stdout.write(str.toString());
};


exports.Lispy = Lispy;
