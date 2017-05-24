/**
 * Created by shenyin.sy on 17/5/23.
 */

"use strict";

var antlr4 = require('antlr4/index');
var AntlrQExprLexer = require('./gen/QExprLexer').QExprLexer;
var AntlrQExprParser = require('./gen/QExprParser').QExprParser;
var AntlrQExprVisitor = require('./gen/QExprVisitor').QExprVisitor;
let tree = require('treeify');

/* Add QEXPR as possible lval type */
// enum { LVAL_ERR, LVAL_NUM, LVAL_SYM, LVAL_SEXPR, LVAL_QEXPR };

Lval.ERR = 1;
Lval.NUM = 2;
Lval.SYM = 3;
Lval.SEXPR = 4;
Lval.QEXPR = 5;

function Lval() {
    this.type;
    this.num;
    this.err;
    this.sym;
    this.cell = [];
};

Lval.prototype.add = function (child) {
    this.cell.push(child);
};

Lval.prototype.count = function () {
    return this.cell.length;
};

// The lval_pop function extracts a single element from an S-Expression at index i and shifts the rest of the list backward so that it no longer contains that lval*.
// It then returns the extracted value. Notice that it doesn't delete the input list. It is like taking an element from a list and popping it out, leaving what remains.
// This means both the element popped and the old list need to be deleted at some point with lval_del.
Lval.prototype.pop = function (i) {
    let r = this.cell.splice(i, 1);
    return r[0];
};
Lval.prototype.take = function (i) {
    let r = this.cell[i];
    this.cell = null;
    return r;
};
Lval.prototype.del = function (start, end) {
    return this.cell.splice(start, end);
}

Lval.prototype.join = function (y) {
    this.cell = this.cell.concat(y);
    return this.cell;
};

function lval_err(str) {
    let r = new Lval();
    r.err = str;
    r.type = Lval.ERR;
    return r
}
///////////////////////////////////////////////

function SimpleAst() {
    this.root = new Lval();
    // + 1 2 => (+ 1 2)
    this.root.type = Lval.SEXPR;
    return this;
};
SimpleAst.prototype.startWalk = function (tree) {
    this._walk(tree, this.root);
};

//TODO:处理异常
SimpleAst.prototype._walk = function (tree, parentLval) {
    let text = tree.getText();

    if (!tree.children) {
        //leaf node
        if (text === '(' || text === ')' || text === '{' || text === '}')
            return;

        let lval = new Lval();
        lval.type = this.convertTerminalNodeType(tree);
        lval.num = lval.type === Lval.NUM ? Number.parseInt(text) : null;
        lval.sym = lval.type === Lval.SYM ? text : null;
        parentLval.cell.push(lval);

    } else if (tree.children.length === 1) {
        // We've reached an inner node with a single child: we don't include this in
        // our AST.
        this._walk(tree.children[0], parentLval);

    } else if (tree.children.length >= 1) {
        let lval = new Lval();
        lval.type = this.convertParserRuleContextType(tree);
        lval.num = lval.type === Lval.NUM ? Number.parseInt(text) : null;
        lval.sym = lval.type === Lval.SYM ? text : null;
        parentLval.add(lval);
        for (let i = 0; i < tree.children.length; i++) {

            // if (!(tree.children[i].getPayload() instanceof antlr4.Token)) {
            this._walk(tree.children[i], lval);
            // }
        }
    }
};
SimpleAst.prototype.toString = function () {
    let tree = require('treeify');
    return tree.asTree(this.root, true);
}
SimpleAst.prototype.convertTerminalNodeType = function (node) {
    let parserNodeType = node.getPayload().type;
    let ret = Lval.SYM;
    if (parserNodeType === AntlrQExprParser.OPERATOR) {
        ret = Lval.SYM;
    } else if (parserNodeType === AntlrQExprParser.NUMBER) {
        ret = Lval.NUM;
    }
    return ret;
};
SimpleAst.prototype.convertParserRuleContextType = function (node) {
    let parserRuleIndex = node.ruleIndex;
    let ret = Lval.SEXPR;
    if (parserRuleIndex === AntlrQExprParser.RULE_sexpr) {
        ret = Lval.SEXPR;
    } else if (parserRuleIndex === AntlrQExprParser.RULE_qexpr) {
        ret = Lval.QEXPR;
    }
    return ret;
}


// const Parser = require('./parser').Parser;
// const parser = new Parser("head {1 2 3} {4 5}");
// let ast = new SimpleAst();
// ast.startWalk(parser.tree);
// let tree = require('treeify');
// var r = tree.asTree(ast.root, true);
// console.log(r);

exports.SimpleAst = SimpleAst;
exports.Lval = Lval;
exports.lval_err = lval_err;

