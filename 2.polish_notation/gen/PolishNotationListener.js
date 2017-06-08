// Generated from /Users/shenyin.sy/projects/myLisp/js-version/polish_notation/PolishNotation.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by PolishNotationParser.
function PolishNotationListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

PolishNotationListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
PolishNotationListener.prototype.constructor = PolishNotationListener;

// Enter a parse tree produced by PolishNotationParser#lispy.
PolishNotationListener.prototype.enterLispy = function(ctx) {
};

// Exit a parse tree produced by PolishNotationParser#lispy.
PolishNotationListener.prototype.exitLispy = function(ctx) {
};


// Enter a parse tree produced by PolishNotationParser#expr.
PolishNotationListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by PolishNotationParser#expr.
PolishNotationListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by PolishNotationParser#operator.
PolishNotationListener.prototype.enterOperator = function(ctx) {
};

// Exit a parse tree produced by PolishNotationParser#operator.
PolishNotationListener.prototype.exitOperator = function(ctx) {
};



exports.PolishNotationListener = PolishNotationListener;