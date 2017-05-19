// Generated from /Users/shenyin.sy/projects/myLisp/js-version/polish_notation/PolishNotation.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by PolishNotationParser.

function PolishNotationVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

PolishNotationVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
PolishNotationVisitor.prototype.constructor = PolishNotationVisitor;

// Visit a parse tree produced by PolishNotationParser#lispy.
PolishNotationVisitor.prototype.visitLispy = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PolishNotationParser#expr.
PolishNotationVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PolishNotationParser#operator.
PolishNotationVisitor.prototype.visitOperator = function(ctx) {
  return this.visitChildren(ctx);
};



exports.PolishNotationVisitor = PolishNotationVisitor;