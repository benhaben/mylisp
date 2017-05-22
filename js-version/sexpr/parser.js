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

function MyVisitor() {
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
    let ret;
    if (ctx.children && ctx.children.length > 0) {
        if (ctx.children.length > 1) {
            //语法支持expr*
            ret = `请加上():\t(${ctx.getText()})`;
        } else {
            //处理(+ 1 2)
            if (ctx.expr(0)){
                ret= this.visit(ctx.expr(0));
            }
        }
    }
    return ret;
};

MyVisitor.prototype.visitExpr = function (ctx) {
    if (ctx.exception) {
        return;
    }
    if (ctx.sexpr(0)){
        return this.visit(ctx.sexpr(0));
    }
    else{
        return `${ctx.getText()}不符合要求`;
    }
}


MyVisitor.prototype.visitSexpr = function (ctx) {
    if (ctx.exception) {
        return;
    }
    return this.visitArray(ctx.children)
}

MyVisitor.prototype.visitArray = function (children) {

    const COUNT = children.length;
    let op = '+';

    if (COUNT >= 1) {

        //0是'（'
        let startOPIndex = 1,
            End = COUNT - 1;

        if (children[1].OPERATOR && children[1].OPERATOR()) {
            op = children[1].OPERATOR().getText()
        } else {
            //()空的sexpr
            return children[0].parentCtx.getText();
        }
        // ( + 1 2 )
        // 0 1 2 3 4
        // count = 5

        // ( + 1 2 3 )
        // 0 1 2 3 4 5
        // count = 6

        // 从一个数开始执行op
        let sum = this.myVisit(children[startOPIndex + 1]);

        for (let i = startOPIndex + 2; i < End; i++) {
            //ExprContext
            let right = this.myVisit(children[i]);
            sum = this.math(op, sum, right);
        }
        return sum;

    }

};

MyVisitor.prototype.myVisit = function (node) {
    if (node.children.length === 1
        && node.children[0].getSymbol   //只有TerminalNodeImpl才有getSymbol方法
        && node.children[0].getSymbol().type === AntlrSExprParser.NUMBER) {
        let ret = Number.parseInt(node.getText());
        if( typeof ret === "number" && !isNaN(ret)){
            return ret;
        }else{
            return `${node.getText()} is not number`;
        }
    } else {
        return this.visit(node);
    }
};

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
