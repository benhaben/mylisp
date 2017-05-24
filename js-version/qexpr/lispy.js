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

Lispy.prototype.printTree = function (v) {
    console.log(tree.asTree(v, true));
};

Lispy.prototype.println = function (v) {
    this.print(v);console.log('\n');
};

Lispy.prototype.print = function (v) {
    switch (v.type) {
        case Lval.NUM:
            this.log(v.num);
            break;
        case Lval.ERR:
            this.log(`Error: ${v.err}`);
            break;
        case Lval.SYM:
            this.log(v.sym);
            break;
        case Lval.SEXPR:
            this.expr_print(v, '(', ')');
            break;
        case Lval.QEXPR:
            this.expr_print(v, '{', '}');
            break;

    }
};
Lispy.prototype.log = function(str){
    process.stdout.write(str.toString());
}

Lispy.prototype.expr_print = function (v, open, close) {
    this.log(open);
    for (let i = 0; i < v.count(); i++) {
        this.print(v.cell[i]);
        if(i != (v.count()-1)){
            this.log(' ');
        }
    }
    this.log(close);
};


exports.Lispy = Lispy;
