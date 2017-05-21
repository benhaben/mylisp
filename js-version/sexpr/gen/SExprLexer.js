// Generated from /Users/shenyin.sy/projects/myLisp/js-version/sexpr/SExpr.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u000b3\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0006\u0004\u001b\n\u0004\r\u0004\u000e",
    "\u0004\u001c\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
    "#\n\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\n\u0006\n.\n\n\r\n\u000e\n/\u0003\n\u0003\n",
    "\u0002\u0002\u000b\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b",
    "\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0003\u0002\u0004\u0003\u0002",
    "2;\u0005\u0002\u000b\f\u000f\u000f\"\"\u00027\u0002\u0003\u0003\u0002",
    "\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002",
    "\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002",
    "\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002",
    "\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002",
    "\u0002\u0002\u0003\u0015\u0003\u0002\u0002\u0002\u0005\u0017\u0003\u0002",
    "\u0002\u0002\u0007\u001a\u0003\u0002\u0002\u0002\t\"\u0003\u0002\u0002",
    "\u0002\u000b$\u0003\u0002\u0002\u0002\r&\u0003\u0002\u0002\u0002\u000f",
    "(\u0003\u0002\u0002\u0002\u0011*\u0003\u0002\u0002\u0002\u0013-\u0003",
    "\u0002\u0002\u0002\u0015\u0016\u0007*\u0002\u0002\u0016\u0004\u0003",
    "\u0002\u0002\u0002\u0017\u0018\u0007+\u0002\u0002\u0018\u0006\u0003",
    "\u0002\u0002\u0002\u0019\u001b\t\u0002\u0002\u0002\u001a\u0019\u0003",
    "\u0002\u0002\u0002\u001b\u001c\u0003\u0002\u0002\u0002\u001c\u001a\u0003",
    "\u0002\u0002\u0002\u001c\u001d\u0003\u0002\u0002\u0002\u001d\b\u0003",
    "\u0002\u0002\u0002\u001e#\u0005\u000b\u0006\u0002\u001f#\u0005\r\u0007",
    "\u0002 #\u0005\u000f\b\u0002!#\u0005\u0011\t\u0002\"\u001e\u0003\u0002",
    "\u0002\u0002\"\u001f\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002",
    "\"!\u0003\u0002\u0002\u0002#\n\u0003\u0002\u0002\u0002$%\u0007,\u0002",
    "\u0002%\f\u0003\u0002\u0002\u0002&\'\u00071\u0002\u0002\'\u000e\u0003",
    "\u0002\u0002\u0002()\u0007-\u0002\u0002)\u0010\u0003\u0002\u0002\u0002",
    "*+\u0007/\u0002\u0002+\u0012\u0003\u0002\u0002\u0002,.\t\u0003\u0002",
    "\u0002-,\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/-\u0003\u0002",
    "\u0002\u0002/0\u0003\u0002\u0002\u000201\u0003\u0002\u0002\u000212\b",
    "\n\u0002\u00022\u0014\u0003\u0002\u0002\u0002\u0006\u0002\u001c\"/\u0003",
    "\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function SExprLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

SExprLexer.prototype = Object.create(antlr4.Lexer.prototype);
SExprLexer.prototype.constructor = SExprLexer;

SExprLexer.EOF = antlr4.Token.EOF;
SExprLexer.T__0 = 1;
SExprLexer.T__1 = 2;
SExprLexer.NUMBER = 3;
SExprLexer.OPERATOR = 4;
SExprLexer.MUL = 5;
SExprLexer.DIV = 6;
SExprLexer.ADD = 7;
SExprLexer.SUB = 8;
SExprLexer.WS = 9;

SExprLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

SExprLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

SExprLexer.prototype.literalNames = [ null, "'('", "')'", null, null, "'*'", 
                                      "'/'", "'+'", "'-'" ];

SExprLexer.prototype.symbolicNames = [ null, null, null, "NUMBER", "OPERATOR", 
                                       "MUL", "DIV", "ADD", "SUB", "WS" ];

SExprLexer.prototype.ruleNames = [ "T__0", "T__1", "NUMBER", "OPERATOR", 
                                   "MUL", "DIV", "ADD", "SUB", "WS" ];

SExprLexer.prototype.grammarFileName = "SExpr.g4";



exports.SExprLexer = SExprLexer;

