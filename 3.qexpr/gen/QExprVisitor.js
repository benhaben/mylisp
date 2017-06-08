// Generated from /Users/shenyin.sy/projects/myLisp/js-version/qexpr/QExpr.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by QExprParser.

function QExprVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

QExprVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
QExprVisitor.prototype.constructor = QExprVisitor;

// Visit a parse tree produced by QExprParser#lispy.
QExprVisitor.prototype.visitLispy = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QExprParser#expr.
QExprVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QExprParser#sexpr.
QExprVisitor.prototype.visitSexpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by QExprParser#qexpr.
QExprVisitor.prototype.visitQexpr = function(ctx) {
  return this.visitChildren(ctx);
};



exports.QExprVisitor = QExprVisitor;