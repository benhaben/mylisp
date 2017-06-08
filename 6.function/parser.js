/**
 * Created by shenyin.sy on 17/5/19.
 */
"use strict";

var antlr4 = require('antlr4/index');
var AntlrParser = require('./gen/FunctionsParser').FunctionsParser;
var AntlrLexer = require('./gen/FunctionsLexer').FunctionsLexer;
const SimpleAst = require('./ast').SimpleAst;

function MyParser(input) {
    this.input = input;
    this.chars = new antlr4.InputStream(input);
    this.lexer = new AntlrLexer(this.chars);
    this.tokens = new antlr4.CommonTokenStream(this.lexer);
    this.parser = new AntlrParser(this.tokens);
    this.parser.buildParseTrees = true;
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
