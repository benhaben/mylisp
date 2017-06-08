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

////////////////////////////////////////////////
function Lispy() {
    this.root_env = new Env();
    this.lenv_add_builtins(this.root_env);
};

Lispy.prototype.start_eval = function (line) {

    //1. create antlr tree
    const parser = new Parser(line);

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
        let r = lval_err("first element is not a function");
        return r;
    }

    /* Call builtin with operator */
    let result = f.fun(e, v);
    return result;

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
    value.fun = func.bind(this);

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
    this.lenv_add_builtin(e, "def",  this.builtin_def);
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

//e is env, a is lval
//def {a b} 5 6
Lispy.prototype.builtin_def = function (e, a) {

    /* First argument is symbol list */
    if (a.cell[0].type !== Lval.QEXPR) {
        return lval_err("Function 'def' passed incorrect type!");
    }

    let syms = a.cell[0];

    /* Ensure all elements of first list are symbols */
    for (let i = 0; i < syms.count(); i++) {
        if (syms.cell[i].type !== Lval.SYM) {
            return lval_err("Function 'def' cannot define non-symbol!");
        }
    }

    /* Check correct number of symbols and values */
    if (syms.count() !== a.count() - 1) {
        return lval_err("Function 'def' cannot define incorrect number of values to symbols");
    }

    /* Assign copies of values to symbols */
    for (let i = 0; i < syms.count(); i++) {
        e.put(syms.cell[i], a.cell[i+1]);
    }

    return lval_sexpr();
};

Lispy.prototype.printTree = function (v) {
    console.log(tree.asTree(v, true));
};

Lispy.prototype.println = function (v) {
    this.print(v);
    console.log('\n');
};

Lispy.prototype.print = function (v) {
    this.log(v.value());
};
Lispy.prototype.log = function (str) {
    process.stdout.write(str.toString());
};


exports.Lispy = Lispy;
