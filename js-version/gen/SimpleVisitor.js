// Generated from /Users/shenyin.sy/projects/myLisp/js-version/Simple.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by SimpleParser.

function SimpleVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

SimpleVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
SimpleVisitor.prototype.constructor = SimpleVisitor;

// Visit a parse tree produced by SimpleParser#date.
SimpleVisitor.prototype.visitDate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SimpleParser#month.
SimpleVisitor.prototype.visitMonth = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SimpleParser#year.
SimpleVisitor.prototype.visitYear = function(ctx) {
  return this.visitChildren(ctx);
};



exports.SimpleVisitor = SimpleVisitor;