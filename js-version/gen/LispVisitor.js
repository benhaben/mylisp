// Generated from /Users/shenyin.sy/projects/myLisp/js-version/Lisp.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by LispParser.

function LispVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

LispVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
LispVisitor.prototype.constructor = LispVisitor;

// Visit a parse tree produced by LispParser#lispy.
LispVisitor.prototype.visitLispy = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LispParser#expression.
LispVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LispParser#sexpr.
LispVisitor.prototype.visitSexpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LispParser#qexpr.
LispVisitor.prototype.visitQexpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LispParser#symbol.
LispVisitor.prototype.visitSymbol = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LispParser#simple_sym.
LispVisitor.prototype.visitSimple_sym = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LispParser#ns_symbol.
LispVisitor.prototype.visitNs_symbol = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LispParser#string.
LispVisitor.prototype.visitString = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LispParser#hex.
LispVisitor.prototype.visitHex = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LispParser#bin.
LispVisitor.prototype.visitBin = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LispParser#bign.
LispVisitor.prototype.visitBign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LispParser#number.
LispVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};



exports.LispVisitor = LispVisitor;