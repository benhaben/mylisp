/**
 * Created by shenyin.sy on 17/5/18.
 */

var antlr4 = require('antlr4/index');
var SimpleLexer = require('./gen/SimpleLexer');
var SimpleParser = require('./gen/SimpleParser');
var SimpleListener = require('./gen/SimpleListener');

//定义语义处理的结构体

LispListener = function () {
    SimpleListener.SimpleListener.call(this);
    return this;
};
LispListener.prototype = Object.create(SimpleListener.SimpleListener.prototype);
LispListener.prototype.constructor = LispListener;

LispListener.prototype.enterYear = function (ctx, s) {
    console.log(`年份是：${ctx.children[0].getText()}！`);
};

LispListener.prototype.enterMonth = function (ctx, s, t) {
    console.log(`月份是：${ctx.children[0].getText()}！`);
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
    this.lexer = new SimpleLexer.SimpleLexer(this.chars);
    this.tokens = new antlr4.CommonTokenStream(this.lexer);
    this.parser = new SimpleParser.SimpleParser(this.tokens);
    this.listener = listener;
    this.errorlistener = errorListener;
    this.parser.removeErrorListeners();
    this.parser.addErrorListener(errorListener);
    return this;
}

LispParser.prototype.walk = function(){
    this.tree = this.parser.date();   //date 是语法的起始点
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(this.listener, this.tree);
}

exports.LispParser = LispParser;
exports.ErrorListener = ErrorListener;
exports.LispListener = LispListener;


// var SimpleVisitor = require('./gen/SimpleVisitor').SimpleVisitor;
// var visitor = new SimpleVisitor()
// return visitor.visitDate(tree) // 'visitBlock' since that was the start rule