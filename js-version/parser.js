/**
 * Created by shenyin.sy on 17/5/18.
 */

var antlr4 = require('antlr4/index');
var AntlrLispLexer = require('./gen/LispLexer').LispLexer;
var AntlrLispParser = require('./gen/LispParser').LispParser;
var AntlrLispListener = require('./gen/LispListener').LispListener;

//定义语义处理的结构体
// 1. print Sexpr and Qexpr
// 2. eval
// 3. function

LispListener = function () {
    AntlrLispListener.call(this);
    return this;
};
LispListener.prototype = Object.create(AntlrLispListener.prototype);
LispListener.prototype.constructor = LispListener;

// Enter a parse tree produced by LispParser#expression.
LispListener.prototype.enterQexpr = function(ctx) {
    console.log(`enterQexpr：${ctx.children[0].getText()}`);
};

LispListener.prototype.enterSexpr = function(ctx) {
    console.log(`enterSexpr：${ctx.children[0].getText()}`);
};


var ErrorListener = function() {
    antlr4.error.ErrorListener.call(this);
    this.annotations = [];
    return this;
};

ErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
ErrorListener.prototype.constructor = ErrorListener;

ErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
    this.annotations.push({
        row: line - 1,
        column: column,
        text: msg,
        type: "error"
    });
};


function LispParser(input, listener, errorListener){
    // var input = "January 1900";
    this.input = input;
    this.chars = new antlr4.InputStream(input);
    this.lexer = new AntlrLispLexer(this.chars);
    this.tokens = new antlr4.CommonTokenStream(this.lexer);
    this.parser = new AntlrLispParser(this.tokens);
    this.listener = listener;
    this.errorlistener = errorListener;
    this.parser.removeErrorListeners();
    this.parser.addErrorListener(errorListener);
    this.parser.buildParseTrees = true;
    return this;
}

LispParser.prototype.walk = function(){
    this.tree = this.parser.lispy();   //date 是语法的起始点
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(this.listener, this.tree);
}

exports.LispParser = LispParser;
exports.ErrorListener = ErrorListener;
exports.LispListener = LispListener;
