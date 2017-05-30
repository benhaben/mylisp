// Generated from /Users/shenyin.sy/projects/myLisp/js-version/sexpr/SExpr.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SExprVisitor = require('./SExprVisitor').SExprVisitor;

var grammarFileName = "SExpr.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u000b\u001d\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0003\u0002\u0007\u0002\n\n\u0002\f\u0002\u000e\u0002\r\u000b",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0012\n\u0003",
    "\u0003\u0004\u0003\u0004\u0007\u0004\u0016\n\u0004\f\u0004\u000e\u0004",
    "\u0019\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0002\u0002\u0005",
    "\u0002\u0004\u0006\u0002\u0002\u0002\u001d\u0002\u000b\u0003\u0002\u0002",
    "\u0002\u0004\u0011\u0003\u0002\u0002\u0002\u0006\u0013\u0003\u0002\u0002",
    "\u0002\b\n\u0005\u0004\u0003\u0002\t\b\u0003\u0002\u0002\u0002\n\r\u0003",
    "\u0002\u0002\u0002\u000b\t\u0003\u0002\u0002\u0002\u000b\f\u0003\u0002",
    "\u0002\u0002\f\u0003\u0003\u0002\u0002\u0002\r\u000b\u0003\u0002\u0002",
    "\u0002\u000e\u0012\u0007\u0003\u0002\u0002\u000f\u0012\u0007\u0004\u0002",
    "\u0002\u0010\u0012\u0005\u0006\u0004\u0002\u0011\u000e\u0003\u0002\u0002",
    "\u0002\u0011\u000f\u0003\u0002\u0002\u0002\u0011\u0010\u0003\u0002\u0002",
    "\u0002\u0012\u0005\u0003\u0002\u0002\u0002\u0013\u0017\u0007\u0005\u0002",
    "\u0002\u0014\u0016\u0005\u0004\u0003\u0002\u0015\u0014\u0003\u0002\u0002",
    "\u0002\u0016\u0019\u0003\u0002\u0002\u0002\u0017\u0015\u0003\u0002\u0002",
    "\u0002\u0017\u0018\u0003\u0002\u0002\u0002\u0018\u001a\u0003\u0002\u0002",
    "\u0002\u0019\u0017\u0003\u0002\u0002\u0002\u001a\u001b\u0007\u0006\u0002",
    "\u0002\u001b\u0007\u0003\u0002\u0002\u0002\u0005\u000b\u0011\u0017"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, "'('", "')'", "'*'", "'/'", "'+'", 
                     "'-'" ];

var symbolicNames = [ null, "NUMBER", "OPERATOR", "LP", "RP", "MUL", "DIV", 
                      "ADD", "SUB", "WS" ];

var ruleNames =  [ "lispy", "expr", "sexpr" ];

function SExprParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SExprParser.prototype = Object.create(antlr4.Parser.prototype);
SExprParser.prototype.constructor = SExprParser;

Object.defineProperty(SExprParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SExprParser.EOF = antlr4.Token.EOF;
SExprParser.NUMBER = 1;
SExprParser.OPERATOR = 2;
SExprParser.LP = 3;
SExprParser.RP = 4;
SExprParser.MUL = 5;
SExprParser.DIV = 6;
SExprParser.ADD = 7;
SExprParser.SUB = 8;
SExprParser.WS = 9;

SExprParser.RULE_lispy = 0;
SExprParser.RULE_expr = 1;
SExprParser.RULE_sexpr = 2;

function LispyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SExprParser.RULE_lispy;
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

LispyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SExprVisitor ) {
        return visitor.visitLispy(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SExprParser.LispyContext = LispyContext;

SExprParser.prototype.lispy = function() {

    var localctx = new LispyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SExprParser.RULE_lispy);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 9;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SExprParser.NUMBER) | (1 << SExprParser.OPERATOR) | (1 << SExprParser.LP))) !== 0)) {
            this.state = 6;
            this.expr();
            this.state = 11;
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
    this.ruleIndex = SExprParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.NUMBER = function() {
    return this.getToken(SExprParser.NUMBER, 0);
};

ExprContext.prototype.OPERATOR = function() {
    return this.getToken(SExprParser.OPERATOR, 0);
};

ExprContext.prototype.sexpr = function() {
    return this.getTypedRuleContext(SexprContext,0);
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SExprVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SExprParser.ExprContext = ExprContext;

SExprParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SExprParser.RULE_expr);
    try {
        this.state = 15;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SExprParser.NUMBER:
            this.enterOuterAlt(localctx, 1);
            this.state = 12;
            this.match(SExprParser.NUMBER);
            break;
        case SExprParser.OPERATOR:
            this.enterOuterAlt(localctx, 2);
            this.state = 13;
            this.match(SExprParser.OPERATOR);
            break;
        case SExprParser.LP:
            this.enterOuterAlt(localctx, 3);
            this.state = 14;
            this.sexpr();
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
    this.ruleIndex = SExprParser.RULE_sexpr;
    return this;
}

SexprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SexprContext.prototype.constructor = SexprContext;

SexprContext.prototype.LP = function() {
    return this.getToken(SExprParser.LP, 0);
};

SexprContext.prototype.RP = function() {
    return this.getToken(SExprParser.RP, 0);
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

SexprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SExprVisitor ) {
        return visitor.visitSexpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SExprParser.SexprContext = SexprContext;

SExprParser.prototype.sexpr = function() {

    var localctx = new SexprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SExprParser.RULE_sexpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 17;
        this.match(SExprParser.LP);
        this.state = 21;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SExprParser.NUMBER) | (1 << SExprParser.OPERATOR) | (1 << SExprParser.LP))) !== 0)) {
            this.state = 18;
            this.expr();
            this.state = 23;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 24;
        this.match(SExprParser.RP);
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


exports.SExprParser = SExprParser;
