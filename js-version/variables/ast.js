"use strict";

var antlr4 = require('antlr4/index');
var AntlrParser = require('./gen/VariablesParser').VariablesParser;
var Map = antlr4.Utils.Map;

Lval.ERR = 1;
Lval.NUM = 2;
Lval.SYM = 3;
Lval.SEXPR = 4;
Lval.QEXPR = 5;
Lval.FUN = 6;

function Lval() {
    this.type;
    this.num;
    this.err;
    this.sym;
    this.fun;
    this.cell = [];
};

Lval.prototype.copy = function (v) {
    let x = new Lval();
    x.type = v.type;
    switch (v.type) {
        /* Copy Functions and Numbers Directly */
        case Lval.FUN:
            x.fun = v.fun;
            break;
        case Lval.NUM:
            x.num = v.num;
            break;
        case Lval.ERR:
            x.err = v.err;
            break;
        case Lval.SYM:
            x.sym = v.sym;
            break;
        case  Lval.SEXPR:
        case  Lval.QEXPR:
            for (let i = 0; i < v.count(); i++) {
                x.cell.push(v.cell[i].copy());
            }
            break;
    }
    return x;
};

Lval.prototype.add = function (child) {
    this.cell.push(child);
    return this;
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
};

Lval.prototype.join = function (y) {
    this.cell = this.cell.concat(y.cell);
    return this;
};

Lval.prototype.value = function () {
    let v = this;
    let r;
    switch (v.type) {
        case Lval.NUM:
            r = v.num;
            break;
        case Lval.ERR:
            r = v.err;
            break;
        case Lval.SYM:
            r = v.sym;
            break;
        case Lval.SEXPR:
            r = this.expr_value(v, '(', ')');
            break;
        case Lval.QEXPR:
            r = this.expr_value(v, '{', '}');
            break;
        case Lval.FUN:
            r = "<function>";
            break;

    }
    return r;
}

Lval.prototype.expr_value = function (v, open, close) {
    let r = open;
    for (let i = 0; i < v.count(); i++) {
        r += v.cell[i].value();
        if (i != (v.count() - 1)) {
            r += ' ';
        }
    }
    r += close;
    return r;
};


function lval_err(str) {
    let r = new Lval();
    r.err = str;
    r.type = Lval.ERR;
    return r
};

function lval_sexpr() {
    let r = new Lval();
    r.type = Lval.SEXPR;
    return r;
};


///////////////////////////////////////////////
function Env() {
    this.map = new Map();
    var hashStuff = antlr4.Utils.hashStuff;

    this.map.hashFunction = function(lval) { hashStuff(lval); };
    this.map.equalsFunction = function(c1, c2) { return c1.sym === c2.sym;};

    return this;
}

Env.prototype.del = function () {
    this.map = null;
};

//key is string, should be lval.sym
Env.prototype.get = function (key) {
    if(this.map.containsKey(key)){
        return this.map.get(key);
    }else{
        return lval_err("unbound symbol!");
    }
};

//key is string, should be lval.sym, value should be lval
Env.prototype.put = function (key, value) {
    this.map.put(key, value);
};

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
    if (parserNodeType === AntlrParser.OPERATOR) {
        ret = Lval.SYM;
    } else if (parserNodeType === AntlrParser.NUMBER) {
        ret = Lval.NUM;
    }
    return ret;
};
SimpleAst.prototype.convertParserRuleContextType = function (node) {
    let parserRuleIndex = node.ruleIndex;
    let ret = Lval.SEXPR;
    if (parserRuleIndex === AntlrParser.RULE_sexpr) {
        ret = Lval.SEXPR;
    } else if (parserRuleIndex === AntlrParser.RULE_qexpr) {
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


// var e = new Env();
// var v = new Lval();
// var k = new Lval();
// k.sym = "test";
// var k1 = new Lval();
// k1.sym = "test1";
// e.put(k, v);
// var b = e.get(k1);
// console.log(v ===b);

exports.SimpleAst = SimpleAst;
exports.Lval = Lval;
exports.Env = Env;
exports.lval_err = lval_err;
exports.lval_sexpr = lval_sexpr;


