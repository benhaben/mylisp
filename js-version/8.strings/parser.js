/**
 * Created by shenyin.sy on 17/5/19.
 */
"use strict";

var antlr4 = require('antlr4/index');
var AntlrParser = require('./gen/StringsParser').StringsParser;
var AntlrLexer = require('./gen/StringsLexer').StringsLexer;
const SimpleAst = require('./ast').SimpleAst;

var AntlrErrorListener = function () {
    antlr4.error.ErrorListener.call(this);
    this.annotations = [];
    return this;
};
AntlrErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
AntlrErrorListener.prototype.constructor = AntlrErrorListener;

AntlrErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e) {
    this.annotations.push({
        row: line - 1,
        column: column,
        text: msg,
        type: "error"
    });
};

function MyParser(input) {
    this.errorlistener = new AntlrErrorListener();

    this.input = input;
    this.chars = new antlr4.InputStream(input);
    this.lexer = new AntlrLexer(this.chars);
    this.lexer.removeErrorListeners();
    this.lexer.addErrorListener(this.errorlistener);

    this.tokens = new antlr4.CommonTokenStream(this.lexer);
    this.parser = new AntlrParser(this.tokens);
    this.parser.buildParseTrees = true;
    this.parser.removeErrorListeners();
    this.parser.addErrorListener(this.errorlistener);
    this.tree = this.parser.lispy();
    return this;
};

MyParser.prototype.errors = function () {
    return this.errorlistener.annotations;
};

MyParser.prototype.startWalk = function () {
    //convert to ast, get lval
    let ast = new SimpleAst();
    ast.startWalk(this.tree);
    this.root = null;
    this.root = ast.root;
    return this.root;
};


exports.Parser = MyParser;
