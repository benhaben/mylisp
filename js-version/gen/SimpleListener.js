// Generated from /Users/shenyin.sy/projects/myLisp/js-version/Simple.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by SimpleParser.
function SimpleListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SimpleListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SimpleListener.prototype.constructor = SimpleListener;

// Enter a parse tree produced by SimpleParser#date.
SimpleListener.prototype.enterDate = function(ctx) {
};

// Exit a parse tree produced by SimpleParser#date.
SimpleListener.prototype.exitDate = function(ctx) {
};


// Enter a parse tree produced by SimpleParser#month.
SimpleListener.prototype.enterMonth = function(ctx) {
};

// Exit a parse tree produced by SimpleParser#month.
SimpleListener.prototype.exitMonth = function(ctx) {
};


// Enter a parse tree produced by SimpleParser#year.
SimpleListener.prototype.enterYear = function(ctx) {
};

// Exit a parse tree produced by SimpleParser#year.
SimpleListener.prototype.exitYear = function(ctx) {
};



exports.SimpleListener = SimpleListener;