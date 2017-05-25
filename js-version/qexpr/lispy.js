/**
 * Created by shenyin.sy on 17/5/24.
 */
"use strict";
const Lval = require('./ast').Lval;
const lval_err = require('./ast').lval_err;
const tree = require('treeify');

function Lispy() {
};

Lispy.prototype.eval = function (v) {
    let r = v;
    if (v.type === Lval.SEXPR) {
        r = this.eval_sexpr(v);
    }
    return r;
};

Lispy.prototype.eval_sexpr = function (v) {

    for (let i = 0; i < v.count(); i++) {
        v.cell[i] = this.eval(v.cell[i]);
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
    if (f.type !== Lval.SYM) {
        let r = lval_err("s-expression does not start with symbol.");
        return r;
    }

    /* Call builtin with operator */
    let result = this.builtin(v, f.sym);
    return result;

};

//v is Lval
Lispy.prototype.builtin = function (v, func) {
    let result;
    if (func === 'list') {
        result = this.builtin_list(v);
    } else if (func === 'head') {
        result = this.builtin_head(v);
    } else if (func === 'tail') {
        result = this.builtin_tail(v);
    } else if (func === 'join') {
        result = this.builtin_join(v);
    } else if (func === 'eval') {
        result = this.builtin_eval(v);
    } else if ("+-/*".indexOf(func) !== -1) {
        result = this.builtin_op(v, func);
    } else {
        result = lval_err(`The ${func} is unknown function!`);
    }

    return result;
};

Lispy.prototype.builtin_list = function (v) {
    v.type = Lval.QEXPR;
    return v;
};

Lispy.prototype.builtin_head = function (a) {
    /* Check Error Conditions */
    let r;
    do {
        if (a.count() != 1) {
            r = lval_err("Function 'head' passed too many arguments!");
            break;
        }

        if (a.cell[0].type != Lval.QEXPR) {
            r = lval_err("Function 'head' passed incorrect types!");
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

Lispy.prototype.builtin_tail = function (a) {
    let r;
    do {
        if (a.count() != 1) {
            r = lval_err("Function 'tail' passed too many arguments!");
            break;
        }

        if (a.cell[0].type != Lval.QEXPR) {
            r = lval_err("Function 'tail' passed incorrect types!");
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

Lispy.prototype.builtin_join = function (a) {
    //input is join {1 2 3 } {4 5 6} {7 8}
    //sym 'join' has been removed，so a.cell[0] is {1 2 3 }, cell[1] is {4 5 6 }

    for (let i = 0; i < a.count(); i++) {
        if (a.cell[i].type !== Lval.QEXPR) {
            return lval_err("Function 'join' passed incorrect type.");
        }
    }

    let x = a.pop(0);

    while (a.count() > 0) {
        x = x.join(a.pop(0));
    }

    return x;
};

Lispy.prototype.builtin_eval = function (a) {
    let r;
    do {
        if (a.count() != 1) {
            r = lval_err("Function 'eval' passed too many arguments!");
            break;
        }

        if (a.cell[0].type != Lval.QEXPR) {
            r = lval_err("Function 'eval' passed incorrect types!");
            break;
        }


        let x = a.take(0);
        x.type = Lval.SEXPR;
        r = this.eval(x);
    } while (false);
    return r;
};

Lispy.prototype.builtin_op = function (a, op) {
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
