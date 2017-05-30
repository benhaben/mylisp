// Generated from /Users/shenyin.sy/projects/myLisp/js-version/6.function/Functions.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\rB\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0003\u0002\u0005\u0002\u001b\n\u0002\u0003\u0002\u0006\u0002\u001e",
    "\n\u0002\r\u0002\u000e\u0002\u001f\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0006\u0003(\n\u0003\r\u0003\u000e",
    "\u0003)\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t",
    "\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0006\f=\n\f\r\f\u000e",
    "\f>\u0003\f\u0003\f\u0002\u0002\r\u0003\u0003\u0005\u0004\u0007\u0005",
    "\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r",
    "\u0003\u0002\u0006\u0003\u00022;\u0006\u00022;C\\aac|\u0006\u0002##",
    "&&((^^\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002J\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003",
    "\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003",
    "\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003",
    "\u0002\u0002\u0002\u0003\u001a\u0003\u0002\u0002\u0002\u0005\'\u0003",
    "\u0002\u0002\u0002\u0007+\u0003\u0002\u0002\u0002\t-\u0003\u0002\u0002",
    "\u0002\u000b/\u0003\u0002\u0002\u0002\r1\u0003\u0002\u0002\u0002\u000f",
    "3\u0003\u0002\u0002\u0002\u00115\u0003\u0002\u0002\u0002\u00137\u0003",
    "\u0002\u0002\u0002\u00159\u0003\u0002\u0002\u0002\u0017<\u0003\u0002",
    "\u0002\u0002\u0019\u001b\u0007/\u0002\u0002\u001a\u0019\u0003\u0002",
    "\u0002\u0002\u001a\u001b\u0003\u0002\u0002\u0002\u001b\u001d\u0003\u0002",
    "\u0002\u0002\u001c\u001e\t\u0002\u0002\u0002\u001d\u001c\u0003\u0002",
    "\u0002\u0002\u001e\u001f\u0003\u0002\u0002\u0002\u001f\u001d\u0003\u0002",
    "\u0002\u0002\u001f \u0003\u0002\u0002\u0002 \u0004\u0003\u0002\u0002",
    "\u0002!(\t\u0003\u0002\u0002\"(\u0005\u0013\n\u0002#(\u0005\u0015\u000b",
    "\u0002$(\u0005\u000f\b\u0002%(\u0005\u0011\t\u0002&(\t\u0004\u0002\u0002",
    "\'!\u0003\u0002\u0002\u0002\'\"\u0003\u0002\u0002\u0002\'#\u0003\u0002",
    "\u0002\u0002\'$\u0003\u0002\u0002\u0002\'%\u0003\u0002\u0002\u0002\'",
    "&\u0003\u0002\u0002\u0002()\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002",
    "\u0002)*\u0003\u0002\u0002\u0002*\u0006\u0003\u0002\u0002\u0002+,\u0007",
    "*\u0002\u0002,\b\u0003\u0002\u0002\u0002-.\u0007+\u0002\u0002.\n\u0003",
    "\u0002\u0002\u0002/0\u0007}\u0002\u00020\f\u0003\u0002\u0002\u00021",
    "2\u0007\u007f\u0002\u00022\u000e\u0003\u0002\u0002\u000234\u0007,\u0002",
    "\u00024\u0010\u0003\u0002\u0002\u000256\u00071\u0002\u00026\u0012\u0003",
    "\u0002\u0002\u000278\u0007-\u0002\u00028\u0014\u0003\u0002\u0002\u0002",
    "9:\u0007/\u0002\u0002:\u0016\u0003\u0002\u0002\u0002;=\t\u0005\u0002",
    "\u0002<;\u0003\u0002\u0002\u0002=>\u0003\u0002\u0002\u0002><\u0003\u0002",
    "\u0002\u0002>?\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@A\b",
    "\f\u0002\u0002A\u0018\u0003\u0002\u0002\u0002\b\u0002\u001a\u001f\'",
    ")>\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function FunctionsLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

FunctionsLexer.prototype = Object.create(antlr4.Lexer.prototype);
FunctionsLexer.prototype.constructor = FunctionsLexer;

FunctionsLexer.EOF = antlr4.Token.EOF;
FunctionsLexer.NUMBER = 1;
FunctionsLexer.SYMBOL = 2;
FunctionsLexer.LP = 3;
FunctionsLexer.RP = 4;
FunctionsLexer.LB = 5;
FunctionsLexer.RB = 6;
FunctionsLexer.MUL = 7;
FunctionsLexer.DIV = 8;
FunctionsLexer.ADD = 9;
FunctionsLexer.SUB = 10;
FunctionsLexer.WS = 11;

FunctionsLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

FunctionsLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

FunctionsLexer.prototype.literalNames = [ null, null, null, "'('", "')'", 
                                          "'{'", "'}'", "'*'", "'/'", "'+'", 
                                          "'-'" ];

FunctionsLexer.prototype.symbolicNames = [ null, "NUMBER", "SYMBOL", "LP", 
                                           "RP", "LB", "RB", "MUL", "DIV", 
                                           "ADD", "SUB", "WS" ];

FunctionsLexer.prototype.ruleNames = [ "NUMBER", "SYMBOL", "LP", "RP", "LB", 
                                       "RB", "MUL", "DIV", "ADD", "SUB", 
                                       "WS" ];

FunctionsLexer.prototype.grammarFileName = "Functions.g4";



exports.FunctionsLexer = FunctionsLexer;

