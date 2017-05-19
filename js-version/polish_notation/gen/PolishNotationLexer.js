// Generated from /Users/shenyin.sy/projects/myLisp/js-version/polish_notation/PolishNotation.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\n+\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0006\u0004\u0019\n\u0004\r\u0004\u000e\u0004\u001a\u0003",
    "\u0005\u0006\u0005\u001e\n\u0005\r\u0005\u000e\u0005\u001f\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0003\t\u0003\t\u0002\u0002\n\u0003\u0003\u0005\u0004\u0007",
    "\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0003\u0002\u0004\u0003",
    "\u00022;\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002,\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003",
    "\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0003\u0013\u0003",
    "\u0002\u0002\u0002\u0005\u0015\u0003\u0002\u0002\u0002\u0007\u0018\u0003",
    "\u0002\u0002\u0002\t\u001d\u0003\u0002\u0002\u0002\u000b#\u0003\u0002",
    "\u0002\u0002\r%\u0003\u0002\u0002\u0002\u000f\'\u0003\u0002\u0002\u0002",
    "\u0011)\u0003\u0002\u0002\u0002\u0013\u0014\u0007*\u0002\u0002\u0014",
    "\u0004\u0003\u0002\u0002\u0002\u0015\u0016\u0007+\u0002\u0002\u0016",
    "\u0006\u0003\u0002\u0002\u0002\u0017\u0019\t\u0002\u0002\u0002\u0018",
    "\u0017\u0003\u0002\u0002\u0002\u0019\u001a\u0003\u0002\u0002\u0002\u001a",
    "\u0018\u0003\u0002\u0002\u0002\u001a\u001b\u0003\u0002\u0002\u0002\u001b",
    "\b\u0003\u0002\u0002\u0002\u001c\u001e\t\u0003\u0002\u0002\u001d\u001c",
    "\u0003\u0002\u0002\u0002\u001e\u001f\u0003\u0002\u0002\u0002\u001f\u001d",
    "\u0003\u0002\u0002\u0002\u001f \u0003\u0002\u0002\u0002 !\u0003\u0002",
    "\u0002\u0002!\"\b\u0005\u0002\u0002\"\n\u0003\u0002\u0002\u0002#$\u0007",
    ",\u0002\u0002$\f\u0003\u0002\u0002\u0002%&\u00071\u0002\u0002&\u000e",
    "\u0003\u0002\u0002\u0002\'(\u0007-\u0002\u0002(\u0010\u0003\u0002\u0002",
    "\u0002)*\u0007/\u0002\u0002*\u0012\u0003\u0002\u0002\u0002\u0005\u0002",
    "\u001a\u001f\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function PolishNotationLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

PolishNotationLexer.prototype = Object.create(antlr4.Lexer.prototype);
PolishNotationLexer.prototype.constructor = PolishNotationLexer;

PolishNotationLexer.EOF = antlr4.Token.EOF;
PolishNotationLexer.T__0 = 1;
PolishNotationLexer.T__1 = 2;
PolishNotationLexer.NUMBER = 3;
PolishNotationLexer.WS = 4;
PolishNotationLexer.MUL = 5;
PolishNotationLexer.DIV = 6;
PolishNotationLexer.ADD = 7;
PolishNotationLexer.SUB = 8;

PolishNotationLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

PolishNotationLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

PolishNotationLexer.prototype.literalNames = [ null, "'('", "')'", null, 
                                               null, "'*'", "'/'", "'+'", 
                                               "'-'" ];

PolishNotationLexer.prototype.symbolicNames = [ null, null, null, "NUMBER", 
                                                "WS", "MUL", "DIV", "ADD", 
                                                "SUB" ];

PolishNotationLexer.prototype.ruleNames = [ "T__0", "T__1", "NUMBER", "WS", 
                                            "MUL", "DIV", "ADD", "SUB" ];

PolishNotationLexer.prototype.grammarFileName = "PolishNotation.g4";



exports.PolishNotationLexer = PolishNotationLexer;

