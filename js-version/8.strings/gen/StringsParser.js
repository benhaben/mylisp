// Generated from /Users/shenyin.sy/projects/myLisp/js-version/8.strings/Strings.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var grammarFileName = "Strings.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u000f.\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0007\u0002",
    "\u000e\n\u0002\f\u0002\u000e\u0002\u0011\u000b\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0018\n\u0003",
    "\u0003\u0004\u0003\u0004\u0007\u0004\u001c\n\u0004\f\u0004\u000e\u0004",
    "\u001f\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0007",
    "\u0005%\n\u0005\f\u0005\u000e\u0005(\u000b\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0002\u0002\u0007\u0002\u0004\u0006",
    "\b\n\u0002\u0002\u0002/\u0002\u000f\u0003\u0002\u0002\u0002\u0004\u0017",
    "\u0003\u0002\u0002\u0002\u0006\u0019\u0003\u0002\u0002\u0002\b\"\u0003",
    "\u0002\u0002\u0002\n+\u0003\u0002\u0002\u0002\f\u000e\u0005\u0004\u0003",
    "\u0002\r\f\u0003\u0002\u0002\u0002\u000e\u0011\u0003\u0002\u0002\u0002",
    "\u000f\r\u0003\u0002\u0002\u0002\u000f\u0010\u0003\u0002\u0002\u0002",
    "\u0010\u0003\u0003\u0002\u0002\u0002\u0011\u000f\u0003\u0002\u0002\u0002",
    "\u0012\u0018\u0007\u0003\u0002\u0002\u0013\u0018\u0007\u0006\u0002\u0002",
    "\u0014\u0018\u0005\u0006\u0004\u0002\u0015\u0018\u0005\b\u0005\u0002",
    "\u0016\u0018\u0005\n\u0006\u0002\u0017\u0012\u0003\u0002\u0002\u0002",
    "\u0017\u0013\u0003\u0002\u0002\u0002\u0017\u0014\u0003\u0002\u0002\u0002",
    "\u0017\u0015\u0003\u0002\u0002\u0002\u0017\u0016\u0003\u0002\u0002\u0002",
    "\u0018\u0005\u0003\u0002\u0002\u0002\u0019\u001d\u0007\u0007\u0002\u0002",
    "\u001a\u001c\u0005\u0004\u0003\u0002\u001b\u001a\u0003\u0002\u0002\u0002",
    "\u001c\u001f\u0003\u0002\u0002\u0002\u001d\u001b\u0003\u0002\u0002\u0002",
    "\u001d\u001e\u0003\u0002\u0002\u0002\u001e \u0003\u0002\u0002\u0002",
    "\u001f\u001d\u0003\u0002\u0002\u0002 !\u0007\b\u0002\u0002!\u0007\u0003",
    "\u0002\u0002\u0002\"&\u0007\t\u0002\u0002#%\u0005\u0004\u0003\u0002",
    "$#\u0003\u0002\u0002\u0002%(\u0003\u0002\u0002\u0002&$\u0003\u0002\u0002",
    "\u0002&\'\u0003\u0002\u0002\u0002\')\u0003\u0002\u0002\u0002(&\u0003",
    "\u0002\u0002\u0002)*\u0007\n\u0002\u0002*\t\u0003\u0002\u0002\u0002",
    "+,\u0007\u0005\u0002\u0002,\u000b\u0003\u0002\u0002\u0002\u0006\u000f",
    "\u0017\u001d&"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, "'('", "')'", "'{'", 
                     "'}'", "'*'", "'/'", "'+'", "'-'" ];

var symbolicNames = [ null, "NUMBER", "COMMENT", "STRING", "SYMBOL", "LP", 
                      "RP", "LB", "RB", "MUL", "DIV", "ADD", "SUB", "WS" ];

var ruleNames =  [ "lispy", "expr", "sexpr", "qexpr", "string" ];

function StringsParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

StringsParser.prototype = Object.create(antlr4.Parser.prototype);
StringsParser.prototype.constructor = StringsParser;

Object.defineProperty(StringsParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

StringsParser.EOF = antlr4.Token.EOF;
StringsParser.NUMBER = 1;
StringsParser.COMMENT = 2;
StringsParser.STRING = 3;
StringsParser.SYMBOL = 4;
StringsParser.LP = 5;
StringsParser.RP = 6;
StringsParser.LB = 7;
StringsParser.RB = 8;
StringsParser.MUL = 9;
StringsParser.DIV = 10;
StringsParser.ADD = 11;
StringsParser.SUB = 12;
StringsParser.WS = 13;

StringsParser.RULE_lispy = 0;
StringsParser.RULE_expr = 1;
StringsParser.RULE_sexpr = 2;
StringsParser.RULE_qexpr = 3;
StringsParser.RULE_string = 4;

function LispyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StringsParser.RULE_lispy;
    return this;
}

LispyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LispyContext.prototype.constructor = LispyContext;

LispyContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};




StringsParser.LispyContext = LispyContext;

StringsParser.prototype.lispy = function() {

    var localctx = new LispyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, StringsParser.RULE_lispy);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 13;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StringsParser.NUMBER) | (1 << StringsParser.STRING) | (1 << StringsParser.SYMBOL) | (1 << StringsParser.LP) | (1 << StringsParser.LB))) !== 0)) {
            this.state = 10;
            this.expr();
            this.state = 15;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StringsParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.NUMBER = function() {
    return this.getToken(StringsParser.NUMBER, 0);
};

ExprContext.prototype.SYMBOL = function() {
    return this.getToken(StringsParser.SYMBOL, 0);
};

ExprContext.prototype.sexpr = function() {
    return this.getTypedRuleContext(SexprContext,0);
};

ExprContext.prototype.qexpr = function() {
    return this.getTypedRuleContext(QexprContext,0);
};

ExprContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};




StringsParser.ExprContext = ExprContext;

StringsParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, StringsParser.RULE_expr);
    try {
        this.state = 21;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case StringsParser.NUMBER:
            this.enterOuterAlt(localctx, 1);
            this.state = 16;
            this.match(StringsParser.NUMBER);
            break;
        case StringsParser.SYMBOL:
            this.enterOuterAlt(localctx, 2);
            this.state = 17;
            this.match(StringsParser.SYMBOL);
            break;
        case StringsParser.LP:
            this.enterOuterAlt(localctx, 3);
            this.state = 18;
            this.sexpr();
            break;
        case StringsParser.LB:
            this.enterOuterAlt(localctx, 4);
            this.state = 19;
            this.qexpr();
            break;
        case StringsParser.STRING:
            this.enterOuterAlt(localctx, 5);
            this.state = 20;
            this.string();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SexprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StringsParser.RULE_sexpr;
    return this;
}

SexprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SexprContext.prototype.constructor = SexprContext;

SexprContext.prototype.LP = function() {
    return this.getToken(StringsParser.LP, 0);
};

SexprContext.prototype.RP = function() {
    return this.getToken(StringsParser.RP, 0);
};

SexprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};




StringsParser.SexprContext = SexprContext;

StringsParser.prototype.sexpr = function() {

    var localctx = new SexprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, StringsParser.RULE_sexpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 23;
        this.match(StringsParser.LP);
        this.state = 27;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StringsParser.NUMBER) | (1 << StringsParser.STRING) | (1 << StringsParser.SYMBOL) | (1 << StringsParser.LP) | (1 << StringsParser.LB))) !== 0)) {
            this.state = 24;
            this.expr();
            this.state = 29;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 30;
        this.match(StringsParser.RP);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QexprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StringsParser.RULE_qexpr;
    return this;
}

QexprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QexprContext.prototype.constructor = QexprContext;

QexprContext.prototype.LB = function() {
    return this.getToken(StringsParser.LB, 0);
};

QexprContext.prototype.RB = function() {
    return this.getToken(StringsParser.RB, 0);
};

QexprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};




StringsParser.QexprContext = QexprContext;

StringsParser.prototype.qexpr = function() {

    var localctx = new QexprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, StringsParser.RULE_qexpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 32;
        this.match(StringsParser.LB);
        this.state = 36;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << StringsParser.NUMBER) | (1 << StringsParser.STRING) | (1 << StringsParser.SYMBOL) | (1 << StringsParser.LP) | (1 << StringsParser.LB))) !== 0)) {
            this.state = 33;
            this.expr();
            this.state = 38;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 39;
        this.match(StringsParser.RB);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StringsParser.RULE_string;
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;

StringContext.prototype.STRING = function() {
    return this.getToken(StringsParser.STRING, 0);
};




StringsParser.StringContext = StringContext;

StringsParser.prototype.string = function() {

    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, StringsParser.RULE_string);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 41;
        this.match(StringsParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.StringsParser = StringsParser;
