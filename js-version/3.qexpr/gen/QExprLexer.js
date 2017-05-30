// Generated from /Users/shenyin.sy/projects/myLisp/js-version/qexpr/QExpr.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0012c\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0003\u0002\u0006\u0002%\n\u0002\r\u0002",
    "\u000e\u0002&\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u00032",
    "\n\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t",
    "\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0006\u0011^\n\u0011\r\u0011\u000e\u0011",
    "_\u0003\u0011\u0003\u0011\u0002\u0002\u0012\u0003\u0003\u0005\u0004",
    "\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015",
    "\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012\u0003",
    "\u0002\u0004\u0003\u00022;\u0005\u0002\u000b\f\u000f\u000f\"\"\u0002",
    "l\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
    "\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002",
    "\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002",
    "\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002",
    "\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002",
    "\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002",
    "\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002",
    "\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002",
    "\u0002\u0003$\u0003\u0002\u0002\u0002\u00051\u0003\u0002\u0002\u0002",
    "\u00073\u0003\u0002\u0002\u0002\t5\u0003\u0002\u0002\u0002\u000b7\u0003",
    "\u0002\u0002\u0002\r9\u0003\u0002\u0002\u0002\u000f;\u0003\u0002\u0002",
    "\u0002\u0011=\u0003\u0002\u0002\u0002\u0013?\u0003\u0002\u0002\u0002",
    "\u0015A\u0003\u0002\u0002\u0002\u0017C\u0003\u0002\u0002\u0002\u0019",
    "H\u0003\u0002\u0002\u0002\u001bM\u0003\u0002\u0002\u0002\u001dR\u0003",
    "\u0002\u0002\u0002\u001fW\u0003\u0002\u0002\u0002!]\u0003\u0002\u0002",
    "\u0002#%\t\u0002\u0002\u0002$#\u0003\u0002\u0002\u0002%&\u0003\u0002",
    "\u0002\u0002&$\u0003\u0002\u0002\u0002&\'\u0003\u0002\u0002\u0002\'",
    "\u0004\u0003\u0002\u0002\u0002(2\u0005\u000f\b\u0002)2\u0005\u0011\t",
    "\u0002*2\u0005\u0013\n\u0002+2\u0005\u0015\u000b\u0002,2\u0005\u0017",
    "\f\u0002-2\u0005\u0019\r\u0002.2\u0005\u001b\u000e\u0002/2\u0005\u001d",
    "\u000f\u000202\u0005\u001f\u0010\u00021(\u0003\u0002\u0002\u00021)\u0003",
    "\u0002\u0002\u00021*\u0003\u0002\u0002\u00021+\u0003\u0002\u0002\u0002",
    "1,\u0003\u0002\u0002\u00021-\u0003\u0002\u0002\u00021.\u0003\u0002\u0002",
    "\u00021/\u0003\u0002\u0002\u000210\u0003\u0002\u0002\u00022\u0006\u0003",
    "\u0002\u0002\u000234\u0007*\u0002\u00024\b\u0003\u0002\u0002\u00025",
    "6\u0007+\u0002\u00026\n\u0003\u0002\u0002\u000278\u0007}\u0002\u0002",
    "8\f\u0003\u0002\u0002\u00029:\u0007\u007f\u0002\u0002:\u000e\u0003\u0002",
    "\u0002\u0002;<\u0007,\u0002\u0002<\u0010\u0003\u0002\u0002\u0002=>\u0007",
    "1\u0002\u0002>\u0012\u0003\u0002\u0002\u0002?@\u0007-\u0002\u0002@\u0014",
    "\u0003\u0002\u0002\u0002AB\u0007/\u0002\u0002B\u0016\u0003\u0002\u0002",
    "\u0002CD\u0007n\u0002\u0002DE\u0007k\u0002\u0002EF\u0007u\u0002\u0002",
    "FG\u0007v\u0002\u0002G\u0018\u0003\u0002\u0002\u0002HI\u0007j\u0002",
    "\u0002IJ\u0007g\u0002\u0002JK\u0007c\u0002\u0002KL\u0007f\u0002\u0002",
    "L\u001a\u0003\u0002\u0002\u0002MN\u0007v\u0002\u0002NO\u0007c\u0002",
    "\u0002OP\u0007k\u0002\u0002PQ\u0007n\u0002\u0002Q\u001c\u0003\u0002",
    "\u0002\u0002RS\u0007l\u0002\u0002ST\u0007q\u0002\u0002TU\u0007k\u0002",
    "\u0002UV\u0007p\u0002\u0002V\u001e\u0003\u0002\u0002\u0002WX\u0007g",
    "\u0002\u0002XY\u0007x\u0002\u0002YZ\u0007c\u0002\u0002Z[\u0007n\u0002",
    "\u0002[ \u0003\u0002\u0002\u0002\\^\t\u0003\u0002\u0002]\\\u0003\u0002",
    "\u0002\u0002^_\u0003\u0002\u0002\u0002_]\u0003\u0002\u0002\u0002_`\u0003",
    "\u0002\u0002\u0002`a\u0003\u0002\u0002\u0002ab\b\u0011\u0002\u0002b",
    "\"\u0003\u0002\u0002\u0002\u0006\u0002&1_\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function QExprLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

QExprLexer.prototype = Object.create(antlr4.Lexer.prototype);
QExprLexer.prototype.constructor = QExprLexer;

QExprLexer.EOF = antlr4.Token.EOF;
QExprLexer.NUMBER = 1;
QExprLexer.OPERATOR = 2;
QExprLexer.LP = 3;
QExprLexer.RP = 4;
QExprLexer.LB = 5;
QExprLexer.RB = 6;
QExprLexer.MUL = 7;
QExprLexer.DIV = 8;
QExprLexer.ADD = 9;
QExprLexer.SUB = 10;
QExprLexer.LIST = 11;
QExprLexer.HEAD = 12;
QExprLexer.TAIL = 13;
QExprLexer.JOIN = 14;
QExprLexer.EVAL = 15;
QExprLexer.WS = 16;

QExprLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

QExprLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

QExprLexer.prototype.literalNames = [ null, null, null, "'('", "')'", "'{'", 
                                      "'}'", "'*'", "'/'", "'+'", "'-'", 
                                      "'list'", "'head'", "'tail'", "'join'", 
                                      "'eval'" ];

QExprLexer.prototype.symbolicNames = [ null, "NUMBER", "OPERATOR", "LP", 
                                       "RP", "LB", "RB", "MUL", "DIV", "ADD", 
                                       "SUB", "LIST", "HEAD", "TAIL", "JOIN", 
                                       "EVAL", "WS" ];

QExprLexer.prototype.ruleNames = [ "NUMBER", "OPERATOR", "LP", "RP", "LB", 
                                   "RB", "MUL", "DIV", "ADD", "SUB", "LIST", 
                                   "HEAD", "TAIL", "JOIN", "EVAL", "WS" ];

QExprLexer.prototype.grammarFileName = "QExpr.g4";



exports.QExprLexer = QExprLexer;

