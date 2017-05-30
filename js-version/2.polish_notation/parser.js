/**
 * Created by shenyin.sy on 17/5/19.
 */
"use strict";
var antlr4 = require('antlr4/index');
var AntlrPolishNotationLexer = require('./gen/PolishNotationLexer').PolishNotationLexer;
var AntlrPolishNotationParser = require('./gen/PolishNotationParser').PolishNotationParser;
var AntlrPolishNotationVisitor = require('./gen/PolishNotationVisitor').PolishNotationVisitor;

//定义语义处理的结构体
// 1. print Sexpr and Qexpr
// 2. eval
// 3. function

// var ErrorListener = function () {
//     antlr4.error.ErrorListener.call(this);
//     this.annotations = [];
//     return this;
// };
//
// ErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
// ErrorListener.prototype.constructor = ErrorListener;
//
// ErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e) {
//     this.annotations.push({
//         row: line - 1,
//         column: column,
//         text: msg,
//         type: "error"
//     });
// };


function MyPolishNotationParser(input) {
    // var input = "January 1900";
    this.input = input;
    this.chars = new antlr4.InputStream(input);
    this.lexer = new AntlrPolishNotationLexer(this.chars);
    this.tokens = new antlr4.CommonTokenStream(this.lexer);
    this.parser = new AntlrPolishNotationParser(this.tokens);
    // this.errorlistener = new ErrorListener();
    // this.parser.removeErrorListeners();
    // this.parser.addErrorListener(this.errorListener);
    this.parser.buildParseTrees = true;
    this.tree = this.parser.lispy();

    return this;
}


MyPolishNotationParser.prototype.startVisitor = function () {
    var visitor = new MyVisitor();
    return visitor.visitLispy(this.tree)
}

function MyVisitor() {
    AntlrPolishNotationVisitor.call(this);
    return this;
};
MyVisitor.prototype = Object.create(AntlrPolishNotationVisitor.prototype);
MyVisitor.prototype.constructor = MyVisitor;


MyVisitor.prototype.visitLispy = function (ctx) {
    // JavaScript Watch Expressions
    // ctx.children[0].getText(): "+"
    // ctx.expr(0).getText(): "1"
    // ctx.expr(1): ExprContext
    // ctx.expr(2): null
    // ctx.operator().getText(): "+"

    //java code:
    // int left = visit(ctx.expr(0));  // get value of left subexpression
    // int right = visit(ctx.expr(1)); // get value of right subexpression
    // if ( ctx.op.getType() == LabeledExprParser.MUL ) return left * right;
    // return left / right; // must be DIV

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
    if (ctx.children[1] instanceof AntlrPolishNotationParser.OperatorContext) {
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
    if (node.children.length === 1 && node.children[0].getSymbol().type === AntlrPolishNotationParser.NUMBER) {
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


exports.Parser = MyPolishNotationParser;
// exports.ErrorListener = ErrorListener;
