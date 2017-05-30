/**
 * Created by shenyin.sy on 17/5/19.
 */
"use strict";

var antlr4 = require('antlr4/index');
var AntlrQExprLexer = require('./gen/QExprLexer').QExprLexer;
var AntlrQExprParser = require('./gen/QExprParser').QExprParser;
var AntlrQExprVisitor = require('./gen/QExprVisitor').QExprVisitor;

function MyQExprParser(input) {
    // var input = "January 1900";
    this.input = input;
    this.chars = new antlr4.InputStream(input);
    this.lexer = new AntlrQExprLexer(this.chars);
    this.tokens = new antlr4.CommonTokenStream(this.lexer);
    this.parser = new AntlrQExprParser(this.tokens);
    // this.errorlistener = new ErrorListener();
    // this.parser.removeErrorListeners();
    // this.parser.addErrorListener(this.errorListener);
    this.parser.buildParseTrees = true;
    this.tree = this.parser.lispy();

    return this;
};


MyQExprParser.prototype.startVisitor = function () {
    var visitor = new MyVisitor();
    return visitor.visitLispy(this.tree)
};


//////////////////////////////////////////////////////////////////////////////
// function MyVisitor() {
//     AntlrQExprVisitor.call(this);
//     return this;
// };
// MyVisitor.prototype = Object.create(AntlrQExprVisitor.prototype);
// MyVisitor.prototype.constructor = MyVisitor;
//
//
// MyVisitor.prototype.visitLispy = function (ctx) {
//
//     //operator or number
//     if (ctx.exception) {
//         return;
//     }
//     let ret;
//     if (ctx.children && ctx.children.length > 0) {
//         if (ctx.children.length > 1) {
//             //语法支持expr*
//             ret = `请加上():\t(${ctx.getText()})`;
//         } else {
//             //处理(+ 1 2)
//             if (ctx.expr(0)) {
//                 ret = this.visit(ctx.expr(0));
//             }
//         }
//     }
//     return ret;
// };
//
// MyVisitor.prototype.visitExpr = function (ctx) {
//     if (ctx.exception) {
//         return;
//     }
//     if (ctx.sexpr(0)) {
//         return this.visit(ctx.sexpr(0));
//     }
//     else if (ctx.qexpr(0)) {
//         return this.visit(ctx.qexpr(0));
//     } else {
//         return `${ctx.getText()}不符合要求`;
//     }
// }
//
//
// MyVisitor.prototype.visitSexpr = function (ctx) {
//     if (ctx.exception) {
//         return;
//     }
//     return this.visitArray(ctx.children)
// }
//
// MyVisitor.prototype.visitQexpr = function (ctx) {
//     if (ctx.exception) {
//         return;
//     }
//     return ctx.children.map(function (child) {
//         return child.getText();
//     }).join(" ");
//     // return ctx.parentCtx.getText();
// };
//
// MyVisitor.prototype.visitArray = function (children) {
//
//     const COUNT = children.length;
//     let opType = AntlrQExprParser.EVAL;
//
//     if (COUNT >= 1) {
//
//         if (children[1].OPERATOR && children[1].OPERATOR()) {
//             opType = this.operatorType(children[1].OPERATOR().getText());
//         } else {
//             //()空的sexpr
//             return children[0].parentCtx.getText();
//         }
//
//         return this.builtin(opType, children);
//     }
//     else {
//         // 可能进入不了？
//         return children[0].parentCtx.getText();
//     }
// };
// MyVisitor.prototype.operatorType = function (op) {
//     let opType = AntlrQExprParser.ADD;
//     if(op === '+'){
//         opType = AntlrQExprParser.ADD;
//     }else if(op === '-'){
//         opType = AntlrQExprParser.SUB;
//     }else if(op === '*'){
//         opType = AntlrQExprParser.MUL;
//     }else if(op === '/'){
//         opType = AntlrQExprParser.DIV;
//     } else if(op === 'list'){
//         opType = AntlrQExprParser.List;
//     }
//     return opType;
// };
//
// MyVisitor.prototype.builtin = function (opType, children) {
//     let r;
//     if (opType === AntlrQExprParser.ADD
//         || opType === AntlrQExprParser.SUB
//         || opType === AntlrQExprParser.MUL
//         || opType === AntlrQExprParser.DIV
//     ) {
//         r = this.math(opType, children);
//     }
//     else if (opType === AntlrQExprParser.LIST) {
//         r = this.builtin_list(children);
//     }
//     return r;
// };
//
// MyVisitor.prototype.builtin_list = function (children) {
//     return children.map(function (child) {
//         return child.getText();
//     }).join(" ");
// };
//
// MyVisitor.prototype.myVisit = function (node) {
//     if (node.children.length === 1
//         && node.children[0].getSymbol   //只有TerminalNodeImpl才有getSymbol方法
//         && node.children[0].getSymbol().type === AntlrQExprParser.NUMBER) {
//         let ret = Number.parseInt(node.getText());
//         if (typeof ret === "number" && !isNaN(ret)) {
//             return ret;
//         } else {
//             return `${node.getText()} is not number`;
//         }
//     } else {
//         return this.visit(node);
//     }
// };
//
// MyVisitor.prototype.math = function (opType, children) {
//     // ( + 1 2 )
//     // 0 1 2 3 4
//     // count = 5
//
//     // ( + 1 2 3 )
//     // 0 1 2 3 4 5
//     // count = 6
//     //0是'（'
//     let startOPIndex = 1,
//         End = COUNT - 1;
//
//     // 从一个数开始执行op
//     let sum = this.myVisit(children[startOPIndex + 1]);
//
//     for (let i = startOPIndex + 2; i < End; i++) {
//         //ExprContext
//         let right = this.myVisit(children[i]);
//         if (opType === AntlrQExprParser.ADD) {
//             sum = sum + right;
//         } else if (opType === AntlrQExprParser.SUB) {
//             sum = sum - right;
//         }
//         else if (opType === AntlrQExprParser.MUL) {
//             sum = sum * right;
//         }
//         else if (opType === AntlrQExprParser.DIV) {
//             sum = sum / right;
//         }
//     }
//     return sum;
// };

// MyVisitor.prototype.println = function () {
// }


exports.Parser = MyQExprParser;
// exports.ErrorListener = ErrorListener;
