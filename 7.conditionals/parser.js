/**
 * Created by shenyin.sy on 17/5/19.
 */
"use strict";

var antlr4 = require('antlr4/index');
var AntlrParser = require('./gen/ConditionalsParser').ConditionalsParser;
var AntlrLexer = require('./gen/ConditionalsLexer').ConditionalsLexer;
const SimpleAst = require('./ast').SimpleAst;

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

function MyParser(input) {
    this.input = input;
    this.chars = new antlr4.InputStream(input);
    this.lexer = new AntlrLexer(this.chars);
    this.tokens = new antlr4.CommonTokenStream(this.lexer);
    this.parser = new AntlrParser(this.tokens);
    this.parser.buildParseTrees = true;
    // this.errorlistener = new ErrorListener();
    // this.parser.removeErrorListeners();
    // this.parser.addErrorListener(this.errorListener);
    this.tree = this.parser.lispy();
    return this;
};
MyParser.prototype.startWalk = function () {
    //convert to ast, get lval
    let ast = new SimpleAst();
    ast.startWalk(this.tree);
    this.root = ast.root;
};


exports.Parser = MyParser;
