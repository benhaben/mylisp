// Generated from /Users/shenyin.sy/projects/myLisp/js-version/Lisp.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var LispListener = require('./LispListener').LispListener;
var LispVisitor = require('./LispVisitor').LispVisitor;

var grammarFileName = "Lisp.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u000fR\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0003\u0002\u0007\u0002\u001c\n\u0002\f\u0002\u000e\u0002\u001f",
    "\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003\'\n\u0003\u0003\u0004\u0003\u0004\u0007\u0004",
    "+\n\u0004\f\u0004\u000e\u0004.\u000b\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0007\u00054\n\u0005\f\u0005\u000e\u00057\u000b\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0005\u0006=\n\u0006",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0005\rP\n\r\u0003\r\u0002\u0002\u000e\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u0002\u0002\u0002R\u0002",
    "\u001d\u0003\u0002\u0002\u0002\u0004&\u0003\u0002\u0002\u0002\u0006",
    "(\u0003\u0002\u0002\u0002\b1\u0003\u0002\u0002\u0002\n<\u0003\u0002",
    "\u0002\u0002\f>\u0003\u0002\u0002\u0002\u000e@\u0003\u0002\u0002\u0002",
    "\u0010B\u0003\u0002\u0002\u0002\u0012D\u0003\u0002\u0002\u0002\u0014",
    "F\u0003\u0002\u0002\u0002\u0016H\u0003\u0002\u0002\u0002\u0018O\u0003",
    "\u0002\u0002\u0002\u001a\u001c\u0005\u0004\u0003\u0002\u001b\u001a\u0003",
    "\u0002\u0002\u0002\u001c\u001f\u0003\u0002\u0002\u0002\u001d\u001b\u0003",
    "\u0002\u0002\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e\u0003\u0003",
    "\u0002\u0002\u0002\u001f\u001d\u0003\u0002\u0002\u0002 \'\u0005\u0010",
    "\t\u0002!\'\u0005\u0018\r\u0002\"\'\u0005\n\u0006\u0002#\'\u0007\u000f",
    "\u0002\u0002$\'\u0005\u0006\u0004\u0002%\'\u0005\b\u0005\u0002& \u0003",
    "\u0002\u0002\u0002&!\u0003\u0002\u0002\u0002&\"\u0003\u0002\u0002\u0002",
    "&#\u0003\u0002\u0002\u0002&$\u0003\u0002\u0002\u0002&%\u0003\u0002\u0002",
    "\u0002\'\u0005\u0003\u0002\u0002\u0002(,\u0007\u0003\u0002\u0002)+\u0005",
    "\u0004\u0003\u0002*)\u0003\u0002\u0002\u0002+.\u0003\u0002\u0002\u0002",
    ",*\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002-/\u0003\u0002\u0002",
    "\u0002.,\u0003\u0002\u0002\u0002/0\u0007\u0004\u0002\u00020\u0007\u0003",
    "\u0002\u0002\u000215\u0007\u0005\u0002\u000224\u0005\u0004\u0003\u0002",
    "32\u0003\u0002\u0002\u000247\u0003\u0002\u0002\u000253\u0003\u0002\u0002",
    "\u000256\u0003\u0002\u0002\u000268\u0003\u0002\u0002\u000275\u0003\u0002",
    "\u0002\u000289\u0007\u0006\u0002\u00029\t\u0003\u0002\u0002\u0002:=",
    "\u0005\u000e\b\u0002;=\u0005\f\u0007\u0002<:\u0003\u0002\u0002\u0002",
    "<;\u0003\u0002\u0002\u0002=\u000b\u0003\u0002\u0002\u0002>?\u0007\u0007",
    "\u0002\u0002?\r\u0003\u0002\u0002\u0002@A\u0007\b\u0002\u0002A\u000f",
    "\u0003\u0002\u0002\u0002BC\u0007\t\u0002\u0002C\u0011\u0003\u0002\u0002",
    "\u0002DE\u0007\u000b\u0002\u0002E\u0013\u0003\u0002\u0002\u0002FG\u0007",
    "\f\u0002\u0002G\u0015\u0003\u0002\u0002\u0002HI\u0007\u000e\u0002\u0002",
    "I\u0017\u0003\u0002\u0002\u0002JP\u0007\n\u0002\u0002KP\u0005\u0012",
    "\n\u0002LP\u0005\u0014\u000b\u0002MP\u0005\u0016\f\u0002NP\u0007\r\u0002",
    "\u0002OJ\u0003\u0002\u0002\u0002OK\u0003\u0002\u0002\u0002OL\u0003\u0002",
    "\u0002\u0002OM\u0003\u0002\u0002\u0002ON\u0003\u0002\u0002\u0002P\u0019",
    "\u0003\u0002\u0002\u0002\b\u001d&,5<O"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'{'", "'}'" ];

var symbolicNames = [ null, null, null, null, null, "SYMBOL", "NS_SYMBOL", 
                      "STRING", "FLOAT", "HEX", "BIN", "LONG", "BIGN", "TRASH" ];

var ruleNames =  [ "lispy", "expression", "sexpr", "qexpr", "symbol", "simple_sym", 
                   "ns_symbol", "string", "hex", "bin", "bign", "number" ];

function LispParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

LispParser.prototype = Object.create(antlr4.Parser.prototype);
LispParser.prototype.constructor = LispParser;

Object.defineProperty(LispParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

LispParser.EOF = antlr4.Token.EOF;
LispParser.T__0 = 1;
LispParser.T__1 = 2;
LispParser.T__2 = 3;
LispParser.T__3 = 4;
LispParser.SYMBOL = 5;
LispParser.NS_SYMBOL = 6;
LispParser.STRING = 7;
LispParser.FLOAT = 8;
LispParser.HEX = 9;
LispParser.BIN = 10;
LispParser.LONG = 11;
LispParser.BIGN = 12;
LispParser.TRASH = 13;

LispParser.RULE_lispy = 0;
LispParser.RULE_expression = 1;
LispParser.RULE_sexpr = 2;
LispParser.RULE_qexpr = 3;
LispParser.RULE_symbol = 4;
LispParser.RULE_simple_sym = 5;
LispParser.RULE_ns_symbol = 6;
LispParser.RULE_string = 7;
LispParser.RULE_hex = 8;
LispParser.RULE_bin = 9;
LispParser.RULE_bign = 10;
LispParser.RULE_number = 11;

function LispyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LispParser.RULE_lispy;
    return this;
}

LispyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LispyContext.prototype.constructor = LispyContext;

LispyContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

LispyContext.prototype.enterRule = function(listener) {
    if(listener instanceof LispListener ) {
        listener.enterLispy(this);
	}
};

LispyContext.prototype.exitRule = function(listener) {
    if(listener instanceof LispListener ) {
        listener.exitLispy(this);
	}
};

LispyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LispVisitor ) {
        return visitor.visitLispy(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LispParser.LispyContext = LispyContext;

LispParser.prototype.lispy = function() {

    var localctx = new LispyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, LispParser.RULE_lispy);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 27;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LispParser.T__0) | (1 << LispParser.T__2) | (1 << LispParser.SYMBOL) | (1 << LispParser.NS_SYMBOL) | (1 << LispParser.STRING) | (1 << LispParser.FLOAT) | (1 << LispParser.HEX) | (1 << LispParser.BIN) | (1 << LispParser.LONG) | (1 << LispParser.BIGN) | (1 << LispParser.TRASH))) !== 0)) {
            this.state = 24;
            this.expression();
            this.state = 29;
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

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LispParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

ExpressionContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

ExpressionContext.prototype.symbol = function() {
    return this.getTypedRuleContext(SymbolContext,0);
};

ExpressionContext.prototype.TRASH = function() {
    return this.getToken(LispParser.TRASH, 0);
};

ExpressionContext.prototype.sexpr = function() {
    return this.getTypedRuleContext(SexprContext,0);
};

ExpressionContext.prototype.qexpr = function() {
    return this.getTypedRuleContext(QexprContext,0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof LispListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof LispListener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LispVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LispParser.ExpressionContext = ExpressionContext;

LispParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, LispParser.RULE_expression);
    try {
        this.state = 36;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LispParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 30;
            this.string();
            break;
        case LispParser.FLOAT:
        case LispParser.HEX:
        case LispParser.BIN:
        case LispParser.LONG:
        case LispParser.BIGN:
            this.enterOuterAlt(localctx, 2);
            this.state = 31;
            this.number();
            break;
        case LispParser.SYMBOL:
        case LispParser.NS_SYMBOL:
            this.enterOuterAlt(localctx, 3);
            this.state = 32;
            this.symbol();
            break;
        case LispParser.TRASH:
            this.enterOuterAlt(localctx, 4);
            this.state = 33;
            this.match(LispParser.TRASH);
            break;
        case LispParser.T__0:
            this.enterOuterAlt(localctx, 5);
            this.state = 34;
            this.sexpr();
            break;
        case LispParser.T__2:
            this.enterOuterAlt(localctx, 6);
            this.state = 35;
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
    this.ruleIndex = LispParser.RULE_sexpr;
    return this;
}

SexprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SexprContext.prototype.constructor = SexprContext;

SexprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

SexprContext.prototype.enterRule = function(listener) {
    if(listener instanceof LispListener ) {
        listener.enterSexpr(this);
	}
};

SexprContext.prototype.exitRule = function(listener) {
    if(listener instanceof LispListener ) {
        listener.exitSexpr(this);
	}
};

SexprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LispVisitor ) {
        return visitor.visitSexpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LispParser.SexprContext = SexprContext;

LispParser.prototype.sexpr = function() {

    var localctx = new SexprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, LispParser.RULE_sexpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 38;
        this.match(LispParser.T__0);
        this.state = 42;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LispParser.T__0) | (1 << LispParser.T__2) | (1 << LispParser.SYMBOL) | (1 << LispParser.NS_SYMBOL) | (1 << LispParser.STRING) | (1 << LispParser.FLOAT) | (1 << LispParser.HEX) | (1 << LispParser.BIN) | (1 << LispParser.LONG) | (1 << LispParser.BIGN) | (1 << LispParser.TRASH))) !== 0)) {
            this.state = 39;
            this.expression();
            this.state = 44;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 45;
        this.match(LispParser.T__1);
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
    this.ruleIndex = LispParser.RULE_qexpr;
    return this;
}

QexprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QexprContext.prototype.constructor = QexprContext;

QexprContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

QexprContext.prototype.enterRule = function(listener) {
    if(listener instanceof LispListener ) {
        listener.enterQexpr(this);
	}
};

QexprContext.prototype.exitRule = function(listener) {
    if(listener instanceof LispListener ) {
        listener.exitQexpr(this);
	}
};

QexprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LispVisitor ) {
        return visitor.visitQexpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LispParser.QexprContext = QexprContext;

LispParser.prototype.qexpr = function() {

    var localctx = new QexprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, LispParser.RULE_qexpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 47;
        this.match(LispParser.T__2);
        this.state = 51;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LispParser.T__0) | (1 << LispParser.T__2) | (1 << LispParser.SYMBOL) | (1 << LispParser.NS_SYMBOL) | (1 << LispParser.STRING) | (1 << LispParser.FLOAT) | (1 << LispParser.HEX) | (1 << LispParser.BIN) | (1 << LispParser.LONG) | (1 << LispParser.BIGN) | (1 << LispParser.TRASH))) !== 0)) {
            this.state = 48;
            this.expression();
            this.state = 53;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 54;
        this.match(LispParser.T__3);
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

function SymbolContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LispParser.RULE_symbol;
    return this;
}

SymbolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SymbolContext.prototype.constructor = SymbolContext;

SymbolContext.prototype.ns_symbol = function() {
    return this.getTypedRuleContext(Ns_symbolContext,0);
};

SymbolContext.prototype.simple_sym = function() {
    return this.getTypedRuleContext(Simple_symContext,0);
};

SymbolContext.prototype.enterRule = function(listener) {
    if(listener instanceof LispListener ) {
        listener.enterSymbol(this);
	}
};

SymbolContext.prototype.exitRule = function(listener) {
    if(listener instanceof LispListener ) {
        listener.exitSymbol(this);
	}
};

SymbolContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LispVisitor ) {
        return visitor.visitSymbol(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LispParser.SymbolContext = SymbolContext;

LispParser.prototype.symbol = function() {

    var localctx = new SymbolContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, LispParser.RULE_symbol);
    try {
        this.state = 58;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LispParser.NS_SYMBOL:
            this.enterOuterAlt(localctx, 1);
            this.state = 56;
            this.ns_symbol();
            break;
        case LispParser.SYMBOL:
            this.enterOuterAlt(localctx, 2);
            this.state = 57;
            this.simple_sym();
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

function Simple_symContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LispParser.RULE_simple_sym;
    return this;
}

Simple_symContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Simple_symContext.prototype.constructor = Simple_symContext;

Simple_symContext.prototype.SYMBOL = function() {
    return this.getToken(LispParser.SYMBOL, 0);
};

Simple_symContext.prototype.enterRule = function(listener) {
    if(listener instanceof LispListener ) {
        listener.enterSimple_sym(this);
	}
};

Simple_symContext.prototype.exitRule = function(listener) {
    if(listener instanceof LispListener ) {
        listener.exitSimple_sym(this);
	}
};

Simple_symContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LispVisitor ) {
        return visitor.visitSimple_sym(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LispParser.Simple_symContext = Simple_symContext;

LispParser.prototype.simple_sym = function() {

    var localctx = new Simple_symContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, LispParser.RULE_simple_sym);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
        this.match(LispParser.SYMBOL);
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

function Ns_symbolContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LispParser.RULE_ns_symbol;
    return this;
}

Ns_symbolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Ns_symbolContext.prototype.constructor = Ns_symbolContext;

Ns_symbolContext.prototype.NS_SYMBOL = function() {
    return this.getToken(LispParser.NS_SYMBOL, 0);
};

Ns_symbolContext.prototype.enterRule = function(listener) {
    if(listener instanceof LispListener ) {
        listener.enterNs_symbol(this);
	}
};

Ns_symbolContext.prototype.exitRule = function(listener) {
    if(listener instanceof LispListener ) {
        listener.exitNs_symbol(this);
	}
};

Ns_symbolContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LispVisitor ) {
        return visitor.visitNs_symbol(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LispParser.Ns_symbolContext = Ns_symbolContext;

LispParser.prototype.ns_symbol = function() {

    var localctx = new Ns_symbolContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, LispParser.RULE_ns_symbol);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this.match(LispParser.NS_SYMBOL);
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
    this.ruleIndex = LispParser.RULE_string;
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;

StringContext.prototype.STRING = function() {
    return this.getToken(LispParser.STRING, 0);
};

StringContext.prototype.enterRule = function(listener) {
    if(listener instanceof LispListener ) {
        listener.enterString(this);
	}
};

StringContext.prototype.exitRule = function(listener) {
    if(listener instanceof LispListener ) {
        listener.exitString(this);
	}
};

StringContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LispVisitor ) {
        return visitor.visitString(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LispParser.StringContext = StringContext;

LispParser.prototype.string = function() {

    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, LispParser.RULE_string);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 64;
        this.match(LispParser.STRING);
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

function HexContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LispParser.RULE_hex;
    return this;
}

HexContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HexContext.prototype.constructor = HexContext;

HexContext.prototype.HEX = function() {
    return this.getToken(LispParser.HEX, 0);
};

HexContext.prototype.enterRule = function(listener) {
    if(listener instanceof LispListener ) {
        listener.enterHex(this);
	}
};

HexContext.prototype.exitRule = function(listener) {
    if(listener instanceof LispListener ) {
        listener.exitHex(this);
	}
};

HexContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LispVisitor ) {
        return visitor.visitHex(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LispParser.HexContext = HexContext;

LispParser.prototype.hex = function() {

    var localctx = new HexContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, LispParser.RULE_hex);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 66;
        this.match(LispParser.HEX);
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

function BinContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LispParser.RULE_bin;
    return this;
}

BinContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BinContext.prototype.constructor = BinContext;

BinContext.prototype.BIN = function() {
    return this.getToken(LispParser.BIN, 0);
};

BinContext.prototype.enterRule = function(listener) {
    if(listener instanceof LispListener ) {
        listener.enterBin(this);
	}
};

BinContext.prototype.exitRule = function(listener) {
    if(listener instanceof LispListener ) {
        listener.exitBin(this);
	}
};

BinContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LispVisitor ) {
        return visitor.visitBin(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LispParser.BinContext = BinContext;

LispParser.prototype.bin = function() {

    var localctx = new BinContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, LispParser.RULE_bin);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        this.match(LispParser.BIN);
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

function BignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LispParser.RULE_bign;
    return this;
}

BignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BignContext.prototype.constructor = BignContext;

BignContext.prototype.BIGN = function() {
    return this.getToken(LispParser.BIGN, 0);
};

BignContext.prototype.enterRule = function(listener) {
    if(listener instanceof LispListener ) {
        listener.enterBign(this);
	}
};

BignContext.prototype.exitRule = function(listener) {
    if(listener instanceof LispListener ) {
        listener.exitBign(this);
	}
};

BignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LispVisitor ) {
        return visitor.visitBign(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LispParser.BignContext = BignContext;

LispParser.prototype.bign = function() {

    var localctx = new BignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, LispParser.RULE_bign);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this.match(LispParser.BIGN);
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

function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LispParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.FLOAT = function() {
    return this.getToken(LispParser.FLOAT, 0);
};

NumberContext.prototype.hex = function() {
    return this.getTypedRuleContext(HexContext,0);
};

NumberContext.prototype.bin = function() {
    return this.getTypedRuleContext(BinContext,0);
};

NumberContext.prototype.bign = function() {
    return this.getTypedRuleContext(BignContext,0);
};

NumberContext.prototype.LONG = function() {
    return this.getToken(LispParser.LONG, 0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof LispListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof LispListener ) {
        listener.exitNumber(this);
	}
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LispVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LispParser.NumberContext = NumberContext;

LispParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, LispParser.RULE_number);
    try {
        this.state = 77;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LispParser.FLOAT:
            this.enterOuterAlt(localctx, 1);
            this.state = 72;
            this.match(LispParser.FLOAT);
            break;
        case LispParser.HEX:
            this.enterOuterAlt(localctx, 2);
            this.state = 73;
            this.hex();
            break;
        case LispParser.BIN:
            this.enterOuterAlt(localctx, 3);
            this.state = 74;
            this.bin();
            break;
        case LispParser.BIGN:
            this.enterOuterAlt(localctx, 4);
            this.state = 75;
            this.bign();
            break;
        case LispParser.LONG:
            this.enterOuterAlt(localctx, 5);
            this.state = 76;
            this.match(LispParser.LONG);
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


exports.LispParser = LispParser;
