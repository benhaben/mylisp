// Generated from /Users/shenyin.sy/projects/myLisp/js-version/qexpr/QExpr.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var QExprVisitor = require('./QExprVisitor').QExprVisitor;

var grammarFileName = "QExpr.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0012)\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0003\u0002\u0007\u0002\f\n\u0002\f\u0002",
    "\u000e\u0002\u000f\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003\u0015\n\u0003\u0003\u0004\u0003\u0004\u0007\u0004",
    "\u0019\n\u0004\f\u0004\u000e\u0004\u001c\u000b\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0007\u0005\"\n\u0005\f\u0005\u000e\u0005",
    "%\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0002\u0002\u0006",
    "\u0002\u0004\u0006\b\u0002\u0002\u0002*\u0002\r\u0003\u0002\u0002\u0002",
    "\u0004\u0014\u0003\u0002\u0002\u0002\u0006\u0016\u0003\u0002\u0002\u0002",
    "\b\u001f\u0003\u0002\u0002\u0002\n\f\u0005\u0004\u0003\u0002\u000b\n",
    "\u0003\u0002\u0002\u0002\f\u000f\u0003\u0002\u0002\u0002\r\u000b\u0003",
    "\u0002\u0002\u0002\r\u000e\u0003\u0002\u0002\u0002\u000e\u0003\u0003",
    "\u0002\u0002\u0002\u000f\r\u0003\u0002\u0002\u0002\u0010\u0015\u0007",
    "\u0003\u0002\u0002\u0011\u0015\u0007\u0004\u0002\u0002\u0012\u0015\u0005",
    "\u0006\u0004\u0002\u0013\u0015\u0005\b\u0005\u0002\u0014\u0010\u0003",
    "\u0002\u0002\u0002\u0014\u0011\u0003\u0002\u0002\u0002\u0014\u0012\u0003",
    "\u0002\u0002\u0002\u0014\u0013\u0003\u0002\u0002\u0002\u0015\u0005\u0003",
    "\u0002\u0002\u0002\u0016\u001a\u0007\u0005\u0002\u0002\u0017\u0019\u0005",
    "\u0004\u0003\u0002\u0018\u0017\u0003\u0002\u0002\u0002\u0019\u001c\u0003",
    "\u0002\u0002\u0002\u001a\u0018\u0003\u0002\u0002\u0002\u001a\u001b\u0003",
    "\u0002\u0002\u0002\u001b\u001d\u0003\u0002\u0002\u0002\u001c\u001a\u0003",
    "\u0002\u0002\u0002\u001d\u001e\u0007\u0006\u0002\u0002\u001e\u0007\u0003",
    "\u0002\u0002\u0002\u001f#\u0007\u0007\u0002\u0002 \"\u0005\u0004\u0003",
    "\u0002! \u0003\u0002\u0002\u0002\"%\u0003\u0002\u0002\u0002#!\u0003",
    "\u0002\u0002\u0002#$\u0003\u0002\u0002\u0002$&\u0003\u0002\u0002\u0002",
    "%#\u0003\u0002\u0002\u0002&\'\u0007\b\u0002\u0002\'\t\u0003\u0002\u0002",
    "\u0002\u0006\r\u0014\u001a#"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, "'('", "')'", "'{'", "'}'", "'*'", 
                     "'/'", "'+'", "'-'", "'list'", "'head'", "'tail'", 
                     "'join'", "'eval'" ];

var symbolicNames = [ null, "NUMBER", "OPERATOR", "LP", "RP", "LB", "RB", 
                      "MUL", "DIV", "ADD", "SUB", "LIST", "HEAD", "TAIL", 
                      "JOIN", "EVAL", "WS" ];

var ruleNames =  [ "lispy", "expr", "sexpr", "qexpr" ];

function QExprParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

QExprParser.prototype = Object.create(antlr4.Parser.prototype);
QExprParser.prototype.constructor = QExprParser;

Object.defineProperty(QExprParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

QExprParser.EOF = antlr4.Token.EOF;
QExprParser.NUMBER = 1;
QExprParser.OPERATOR = 2;
QExprParser.LP = 3;
QExprParser.RP = 4;
QExprParser.LB = 5;
QExprParser.RB = 6;
QExprParser.MUL = 7;
QExprParser.DIV = 8;
QExprParser.ADD = 9;
QExprParser.SUB = 10;
QExprParser.LIST = 11;
QExprParser.HEAD = 12;
QExprParser.TAIL = 13;
QExprParser.JOIN = 14;
QExprParser.EVAL = 15;
QExprParser.WS = 16;

QExprParser.RULE_lispy = 0;
QExprParser.RULE_expr = 1;
QExprParser.RULE_sexpr = 2;
QExprParser.RULE_qexpr = 3;

function LispyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = QExprParser.RULE_lispy;
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
    if ( visitor instanceof QExprVisitor ) {
        return visitor.visitLispy(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QExprParser.LispyContext = LispyContext;

QExprParser.prototype.lispy = function() {

    var localctx = new LispyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, QExprParser.RULE_lispy);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 11;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << QExprParser.NUMBER) | (1 << QExprParser.OPERATOR) | (1 << QExprParser.LP) | (1 << QExprParser.LB))) !== 0)) {
            this.state = 8;
            this.expr();
            this.state = 13;
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
    this.ruleIndex = QExprParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.NUMBER = function() {
    return this.getToken(QExprParser.NUMBER, 0);
};

ExprContext.prototype.OPERATOR = function() {
    return this.getToken(QExprParser.OPERATOR, 0);
};

ExprContext.prototype.sexpr = function() {
    return this.getTypedRuleContext(SexprContext,0);
};

ExprContext.prototype.qexpr = function() {
    return this.getTypedRuleContext(QexprContext,0);
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QExprVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QExprParser.ExprContext = ExprContext;

QExprParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, QExprParser.RULE_expr);
    try {
        this.state = 18;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case QExprParser.NUMBER:
            this.enterOuterAlt(localctx, 1);
            this.state = 14;
            this.match(QExprParser.NUMBER);
            break;
        case QExprParser.OPERATOR:
            this.enterOuterAlt(localctx, 2);
            this.state = 15;
            this.match(QExprParser.OPERATOR);
            break;
        case QExprParser.LP:
            this.enterOuterAlt(localctx, 3);
            this.state = 16;
            this.sexpr();
            break;
        case QExprParser.LB:
            this.enterOuterAlt(localctx, 4);
            this.state = 17;
            this.qexpr();
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
    this.ruleIndex = QExprParser.RULE_sexpr;
    return this;
}

SexprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SexprContext.prototype.constructor = SexprContext;

SexprContext.prototype.LP = function() {
    return this.getToken(QExprParser.LP, 0);
};

SexprContext.prototype.RP = function() {
    return this.getToken(QExprParser.RP, 0);
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
    if ( visitor instanceof QExprVisitor ) {
        return visitor.visitSexpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QExprParser.SexprContext = SexprContext;

QExprParser.prototype.sexpr = function() {

    var localctx = new SexprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, QExprParser.RULE_sexpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 20;
        this.match(QExprParser.LP);
        this.state = 24;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << QExprParser.NUMBER) | (1 << QExprParser.OPERATOR) | (1 << QExprParser.LP) | (1 << QExprParser.LB))) !== 0)) {
            this.state = 21;
            this.expr();
            this.state = 26;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 27;
        this.match(QExprParser.RP);
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
    this.ruleIndex = QExprParser.RULE_qexpr;
    return this;
}

QexprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QexprContext.prototype.constructor = QexprContext;

QexprContext.prototype.LB = function() {
    return this.getToken(QExprParser.LB, 0);
};

QexprContext.prototype.RB = function() {
    return this.getToken(QExprParser.RB, 0);
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

QexprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof QExprVisitor ) {
        return visitor.visitQexpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




QExprParser.QexprContext = QexprContext;

QExprParser.prototype.qexpr = function() {

    var localctx = new QexprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, QExprParser.RULE_qexpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 29;
        this.match(QExprParser.LB);
        this.state = 33;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << QExprParser.NUMBER) | (1 << QExprParser.OPERATOR) | (1 << QExprParser.LP) | (1 << QExprParser.LB))) !== 0)) {
            this.state = 30;
            this.expr();
            this.state = 35;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 36;
        this.match(QExprParser.RB);
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


exports.QExprParser = QExprParser;
