// Generated from /Users/shenyin.sy/projects/myLisp/js-version/Lisp.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by LispParser.
function LispListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

LispListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
LispListener.prototype.constructor = LispListener;

// Enter a parse tree produced by LispParser#lispy.
LispListener.prototype.enterLispy = function(ctx) {
};

// Exit a parse tree produced by LispParser#lispy.
LispListener.prototype.exitLispy = function(ctx) {
};


// Enter a parse tree produced by LispParser#expression.
LispListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by LispParser#expression.
LispListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by LispParser#sexpr.
LispListener.prototype.enterSexpr = function(ctx) {
};

// Exit a parse tree produced by LispParser#sexpr.
LispListener.prototype.exitSexpr = function(ctx) {
};


// Enter a parse tree produced by LispParser#qexpr.
LispListener.prototype.enterQexpr = function(ctx) {
};

// Exit a parse tree produced by LispParser#qexpr.
LispListener.prototype.exitQexpr = function(ctx) {
};


// Enter a parse tree produced by LispParser#symbol.
LispListener.prototype.enterSymbol = function(ctx) {
};

// Exit a parse tree produced by LispParser#symbol.
LispListener.prototype.exitSymbol = function(ctx) {
};


// Enter a parse tree produced by LispParser#simple_sym.
LispListener.prototype.enterSimple_sym = function(ctx) {
};

// Exit a parse tree produced by LispParser#simple_sym.
LispListener.prototype.exitSimple_sym = function(ctx) {
};


// Enter a parse tree produced by LispParser#ns_symbol.
LispListener.prototype.enterNs_symbol = function(ctx) {
};

// Exit a parse tree produced by LispParser#ns_symbol.
LispListener.prototype.exitNs_symbol = function(ctx) {
};


// Enter a parse tree produced by LispParser#string.
LispListener.prototype.enterString = function(ctx) {
};

// Exit a parse tree produced by LispParser#string.
LispListener.prototype.exitString = function(ctx) {
};


// Enter a parse tree produced by LispParser#hex.
LispListener.prototype.enterHex = function(ctx) {
};

// Exit a parse tree produced by LispParser#hex.
LispListener.prototype.exitHex = function(ctx) {
};


// Enter a parse tree produced by LispParser#bin.
LispListener.prototype.enterBin = function(ctx) {
};

// Exit a parse tree produced by LispParser#bin.
LispListener.prototype.exitBin = function(ctx) {
};


// Enter a parse tree produced by LispParser#bign.
LispListener.prototype.enterBign = function(ctx) {
};

// Exit a parse tree produced by LispParser#bign.
LispListener.prototype.exitBign = function(ctx) {
};


// Enter a parse tree produced by LispParser#number.
LispListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by LispParser#number.
LispListener.prototype.exitNumber = function(ctx) {
};



exports.LispListener = LispListener;