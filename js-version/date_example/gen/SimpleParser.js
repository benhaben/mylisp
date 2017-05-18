// Generated from /Users/shenyin.sy/projects/myLisp/js-version/Simple.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SimpleListener = require('./SimpleListener').SimpleListener;
var SimpleVisitor = require('./SimpleVisitor').SimpleVisitor;

var grammarFileName = "Simple.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0005\u0010\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0002\u0002\u0005\u0002\u0004\u0006",
    "\u0002\u0002\u0002\f\u0002\b\u0003\u0002\u0002\u0002\u0004\u000b\u0003",
    "\u0002\u0002\u0002\u0006\r\u0003\u0002\u0002\u0002\b\t\u0005\u0004\u0003",
    "\u0002\t\n\u0005\u0006\u0004\u0002\n\u0003\u0003\u0002\u0002\u0002\u000b",
    "\f\u0007\u0003\u0002\u0002\f\u0005\u0003\u0002\u0002\u0002\r\u000e\u0007",
    "\u0004\u0002\u0002\u000e\u0007\u0003\u0002\u0002\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [  ];

var symbolicNames = [ null, "MONTH", "YEAR", "WS" ];

var ruleNames =  [ "date", "month", "year" ];

function SimpleParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SimpleParser.prototype = Object.create(antlr4.Parser.prototype);
SimpleParser.prototype.constructor = SimpleParser;

Object.defineProperty(SimpleParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SimpleParser.EOF = antlr4.Token.EOF;
SimpleParser.MONTH = 1;
SimpleParser.YEAR = 2;
SimpleParser.WS = 3;

SimpleParser.RULE_date = 0;
SimpleParser.RULE_month = 1;
SimpleParser.RULE_year = 2;

function DateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SimpleParser.RULE_date;
    return this;
}

DateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DateContext.prototype.constructor = DateContext;

DateContext.prototype.month = function() {
    return this.getTypedRuleContext(MonthContext,0);
};

DateContext.prototype.year = function() {
    return this.getTypedRuleContext(YearContext,0);
};

DateContext.prototype.enterRule = function(listener) {
    if(listener instanceof SimpleListener ) {
        listener.enterDate(this);
	}
};

DateContext.prototype.exitRule = function(listener) {
    if(listener instanceof SimpleListener ) {
        listener.exitDate(this);
	}
};

DateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SimpleVisitor ) {
        return visitor.visitDate(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SimpleParser.DateContext = DateContext;

SimpleParser.prototype.date = function() {

    var localctx = new DateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SimpleParser.RULE_date);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 6;
        this.month();
        this.state = 7;
        this.year();
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

function MonthContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SimpleParser.RULE_month;
    return this;
}

MonthContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MonthContext.prototype.constructor = MonthContext;

MonthContext.prototype.MONTH = function() {
    return this.getToken(SimpleParser.MONTH, 0);
};

MonthContext.prototype.enterRule = function(listener) {
    if(listener instanceof SimpleListener ) {
        listener.enterMonth(this);
	}
};

MonthContext.prototype.exitRule = function(listener) {
    if(listener instanceof SimpleListener ) {
        listener.exitMonth(this);
	}
};

MonthContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SimpleVisitor ) {
        return visitor.visitMonth(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SimpleParser.MonthContext = MonthContext;

SimpleParser.prototype.month = function() {

    var localctx = new MonthContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SimpleParser.RULE_month);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 9;
        this.match(SimpleParser.MONTH);
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

function YearContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SimpleParser.RULE_year;
    return this;
}

YearContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
YearContext.prototype.constructor = YearContext;

YearContext.prototype.YEAR = function() {
    return this.getToken(SimpleParser.YEAR, 0);
};

YearContext.prototype.enterRule = function(listener) {
    if(listener instanceof SimpleListener ) {
        listener.enterYear(this);
	}
};

YearContext.prototype.exitRule = function(listener) {
    if(listener instanceof SimpleListener ) {
        listener.exitYear(this);
	}
};

YearContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SimpleVisitor ) {
        return visitor.visitYear(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SimpleParser.YearContext = YearContext;

SimpleParser.prototype.year = function() {

    var localctx = new YearContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SimpleParser.RULE_year);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 11;
        this.match(SimpleParser.YEAR);
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


exports.SimpleParser = SimpleParser;
