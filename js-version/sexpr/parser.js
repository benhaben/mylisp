/**
 * Created by shenyin.sy on 17/5/19.
 */
"use strict";

var antlr4 = require('antlr4/index');
var AntlrSExprLexer = require('./gen/SExprLexer').SExprLexer;
var AntlrSExprParser = require('./gen/SExprParser').SExprParser;
var AntlrSExprVisitor = require('./gen/SExprVisitor').SExprVisitor;

function MySExprParser(input) {
    // var input = "January 1900";
    this.input = input;
    this.chars = new antlr4.InputStream(input);
    this.lexer = new AntlrSExprLexer(this.chars);
    this.tokens = new antlr4.CommonTokenStream(this.lexer);
    this.parser = new AntlrSExprParser(this.tokens);
    // this.errorlistener = new ErrorListener();
    // this.parser.removeErrorListeners();
    // this.parser.addErrorListener(this.errorListener);
    this.parser.buildParseTrees = true;
    this.tree = this.parser.lispy();

    return this;
};


MySExprParser.prototype.startVisitor = function () {
    var visitor = new MyVisitor();
    return visitor.visitLispy(this.tree)
};

function MyVisitor () {
    AntlrSExprVisitor.call(this);
    return this;
};
MyVisitor.prototype = Object.create(AntlrSExprVisitor.prototype);
MyVisitor.prototype.constructor = MyVisitor;


MyVisitor.prototype.visitLispy = function (ctx) {

    //operator or number
    if (ctx.exception) {
        return;
    }

    return this.visit(ctx.expr(0));
};

MyVisitor.prototype.visitExpr = function (ctx) {
    //operator or number
    if (ctx.exception) {
        return;
    }

    const COUNT = ctx.children.length;
    let op = '+';

    //0是'（'，1是操作符
    if (ctx.children[1] instanceof AntlrSExprParser.OperatorContext) {
        op = ctx.children[1].getText();
    }
    // ( + 1 2 )
    // 0 1 2 3 4
    // count = 5

    // ( + 1 2 3 )
    // 0 1 2 3 4 5
    // count = 6

    // 从一个数开始执行op
    let sum = this.myVisit(ctx.children[2]);

    for (let i = 3; i < COUNT - 1; i++) {
        //ExprContext
        let right = this.myVisit(ctx.children[i]);
        sum = this.math(op, sum, right);
    }
    return sum;

};

MyVisitor.prototype.myVisit = function (node) {
    // 孩子只有一个说明是没有子节点的终极节点了，有多个孩子说明需要继续访问
    // 最好还是`用类型来判断
    // node.NUMBER,node.NUMBER.getSymbol
    if (node.children.length === 1 && node.children[0].getSymbol().type === AntlrSExprParser.NUMBER) {
        return Number.parseInt(node.getText());
    } else {
        return this.visit(node);
    }
}
MyVisitor.prototype.math = function (op, left, right) {
    if (op === '+') {
        return left + right;
    } else if (op === '-') {
        return left - right;
    }
    else if (op === '*') {
        return left * right;
    }
    else if (op === '/') {
        return left / right;
    }
}


exports.Parser = MySExprParser;
// exports.ErrorListener = ErrorListener;
