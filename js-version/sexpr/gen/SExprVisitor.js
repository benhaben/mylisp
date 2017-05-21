// Generated from /Users/shenyin.sy/projects/myLisp/js-version/sexpr/SExpr.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by SExprParser.

function SExprVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

SExprVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
SExprVisitor.prototype.constructor = SExprVisitor;

// Visit a parse tree produced by SExprParser#lispy.
SExprVisitor.prototype.visitLispy = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SExprParser#expr.
SExprVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SExprParser#sexpr.
SExprVisitor.prototype.visitSexpr = function(ctx) {
  return this.visitChildren(ctx);
};



exports.SExprVisitor = SExprVisitor;