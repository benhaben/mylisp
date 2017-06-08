// Generated from /Users/shenyin.sy/projects/myLisp/js-version/polish_notation/PolishNotation.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var PolishNotationListener = require('./PolishNotationListener').PolishNotationListener;
var PolishNotationVisitor = require('./PolishNotationVisitor').PolishNotationVisitor;

var grammarFileName = "PolishNotation.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\n\u001c\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0003\u0002\u0006\u0002\n\n\u0002\r\u0002\u000e\u0002\u000b\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0006\u0003\u0012\n\u0003",
    "\r\u0003\u000e\u0003\u0013\u0003\u0003\u0003\u0003\u0005\u0003\u0018",
    "\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0002\u0002\u0005\u0002",
    "\u0004\u0006\u0002\u0003\u0003\u0002\u0007\n\u0002\u001b\u0002\t\u0003",
    "\u0002\u0002\u0002\u0004\u0017\u0003\u0002\u0002\u0002\u0006\u0019\u0003",
    "\u0002\u0002\u0002\b\n\u0005\u0004\u0003\u0002\t\b\u0003\u0002\u0002",
    "\u0002\n\u000b\u0003\u0002\u0002\u0002\u000b\t\u0003\u0002\u0002\u0002",
    "\u000b\f\u0003\u0002\u0002\u0002\f\u0003\u0003\u0002\u0002\u0002\r\u0018",
    "\u0007\u0005\u0002\u0002\u000e\u000f\u0007\u0003\u0002\u0002\u000f\u0011",
    "\u0005\u0006\u0004\u0002\u0010\u0012\u0005\u0004\u0003\u0002\u0011\u0010",
    "\u0003\u0002\u0002\u0002\u0012\u0013\u0003\u0002\u0002\u0002\u0013\u0011",
    "\u0003\u0002\u0002\u0002\u0013\u0014\u0003\u0002\u0002\u0002\u0014\u0015",
    "\u0003\u0002\u0002\u0002\u0015\u0016\u0007\u0004\u0002\u0002\u0016\u0018",
    "\u0003\u0002\u0002\u0002\u0017\r\u0003\u0002\u0002\u0002\u0017\u000e",
    "\u0003\u0002\u0002\u0002\u0018\u0005\u0003\u0002\u0002\u0002\u0019\u001a",
    "\t\u0002\u0002\u0002\u001a\u0007\u0003\u0002\u0002\u0002\u0005\u000b",
    "\u0013\u0017"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", null, null, "'*'", "'/'", "'+'", 
                     "'-'" ];

var symbolicNames = [ null, null, null, "NUMBER", "WS", "MUL", "DIV", "ADD", 
                      "SUB" ];

var ruleNames =  [ "lispy", "expr", "operator" ];

function PolishNotationParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

PolishNotationParser.prototype = Object.create(antlr4.Parser.prototype);
PolishNotationParser.prototype.constructor = PolishNotationParser;

Object.defineProperty(PolishNotationParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

PolishNotationParser.EOF = antlr4.Token.EOF;
PolishNotationParser.T__0 = 1;
PolishNotationParser.T__1 = 2;
PolishNotationParser.NUMBER = 3;
PolishNotationParser.WS = 4;
PolishNotationParser.MUL = 5;
PolishNotationParser.DIV = 6;
PolishNotationParser.ADD = 7;
PolishNotationParser.SUB = 8;

PolishNotationParser.RULE_lispy = 0;
PolishNotationParser.RULE_expr = 1;
PolishNotationParser.RULE_operator = 2;

function LispyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PolishNotationParser.RULE_lispy;
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

LispyContext.prototype.enterRule = function(listener) {
    if(listener instanceof PolishNotationListener ) {
        listener.enterLispy(this);
	}
};

LispyContext.prototype.exitRule = function(listener) {
    if(listener instanceof PolishNotationListener ) {
        listener.exitLispy(this);
	}
};

LispyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PolishNotationVisitor ) {
        return visitor.visitLispy(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PolishNotationParser.LispyContext = LispyContext;

PolishNotationParser.prototype.lispy = function() {

    var localctx = new LispyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, PolishNotationParser.RULE_lispy);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 7; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 6;
            this.expr();
            this.state = 9; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===PolishNotationParser.T__0 || _la===PolishNotationParser.NUMBER);
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
    this.ruleIndex = PolishNotationParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.NUMBER = function() {
    return this.getToken(PolishNotationParser.NUMBER, 0);
};

ExprContext.prototype.operator = function() {
    return this.getTypedRuleContext(OperatorContext,0);
};

ExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof PolishNotationListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof PolishNotationListener ) {
        listener.exitExpr(this);
	}
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PolishNotationVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PolishNotationParser.ExprContext = ExprContext;

PolishNotationParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, PolishNotationParser.RULE_expr);
    var _la = 0; // Token type
    try {
        this.state = 21;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PolishNotationParser.NUMBER:
            this.enterOuterAlt(localctx, 1);
            this.state = 11;
            this.match(PolishNotationParser.NUMBER);
            break;
        case PolishNotationParser.T__0:
            this.enterOuterAlt(localctx, 2);
            this.state = 12;
            this.match(PolishNotationParser.T__0);
            this.state = 13;
            this.operator();
            this.state = 15; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 14;
                this.expr();
                this.state = 17; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===PolishNotationParser.T__0 || _la===PolishNotationParser.NUMBER);
            this.state = 19;
            this.match(PolishNotationParser.T__1);
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

function OperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PolishNotationParser.RULE_operator;
    return this;
}

OperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorContext.prototype.constructor = OperatorContext;

OperatorContext.prototype.MUL = function() {
    return this.getToken(PolishNotationParser.MUL, 0);
};

OperatorContext.prototype.DIV = function() {
    return this.getToken(PolishNotationParser.DIV, 0);
};

OperatorContext.prototype.ADD = function() {
    return this.getToken(PolishNotationParser.ADD, 0);
};

OperatorContext.prototype.SUB = function() {
    return this.getToken(PolishNotationParser.SUB, 0);
};

OperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof PolishNotationListener ) {
        listener.enterOperator(this);
	}
};

OperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof PolishNotationListener ) {
        listener.exitOperator(this);
	}
};

OperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PolishNotationVisitor ) {
        return visitor.visitOperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PolishNotationParser.OperatorContext = OperatorContext;

PolishNotationParser.prototype.operator = function() {

    var localctx = new OperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, PolishNotationParser.RULE_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 23;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PolishNotationParser.MUL) | (1 << PolishNotationParser.DIV) | (1 << PolishNotationParser.ADD) | (1 << PolishNotationParser.SUB))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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


exports.PolishNotationParser = PolishNotationParser;
