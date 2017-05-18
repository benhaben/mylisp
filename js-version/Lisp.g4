grammar Lisp;
/*------------------------------------------------------------------
 * A very basic implementation of a Lisp grammar.
 *------------------------------------------------------------------*/

/*------------------------------------------------------------------
 * PARSER RULES
 *------------------------------------------------------------------*/

lispy : expression *;
expression: string | number | symbol | TRASH | sexpr | qexpr;
sexpr: '(' expression* ')';
qexpr: '{' expression* '}' ;


/*------------------------------------------------------------------
 * LEXER RULES
 *------------------------------------------------------------------*/

symbol: ns_symbol | simple_sym;
simple_sym: SYMBOL;
ns_symbol: NS_SYMBOL;

SYMBOL
     : '.'
     | '/'
     | NAME
     ;
NS_SYMBOL
    : NAME '/' SYMBOL
    ;

STRING : '"' ( ~'"' | '\\' '"' )* '"' ;
string: STRING;

hex: HEX;
bin: BIN;
bign: BIGN;
number
    : FLOAT
    | hex
    | bin
    | bign
    | LONG
    ;

// FIXME: Doesn't deal with arbitrary read radixes, BigNums
FLOAT
    : '-'? [0-9]+ FLOAT_TAIL
    | '-'? 'Infinity'
    | '-'? 'NaN'
    ;

fragment
FLOAT_TAIL
    : FLOAT_DECIMAL FLOAT_EXP
    | FLOAT_DECIMAL
    | FLOAT_EXP
    ;

fragment
FLOAT_DECIMAL
    : '.' [0-9]+
    ;

fragment
FLOAT_EXP
    : [eE] '-'? [0-9]+
    ;
fragment
HEXD: [0-9a-fA-F] ;
HEX: '0' [xX] HEXD+ ;
BIN: '0' [bB] [10]+ ;
LONG: '-'? [0-9]+[lL]?;
BIGN: '-'? [0-9]+[nN];

// Fragments
//--------------------------------------------------------------------

fragment
NAME: SYMBOL_HEAD SYMBOL_REST* (':' SYMBOL_REST+)* ;

fragment
SYMBOL_HEAD
    : ~('0' .. '9'
        | '^' | '`' | '\'' | '"' | '#' | '~' | '@' | ':' | '/' | '%' | '(' | ')' | '[' | ']' | '{' | '}' // FIXME: could be one group
        | [ \n\r\t,] // FIXME: could be WS
        )
    ;

fragment
SYMBOL_REST
    : SYMBOL_HEAD
    | '0'..'9'
    | '.'
    ;


// Discard
//--------------------------------------------------------------------

fragment
WS : [ \n\r\t,] ;

fragment
COMMENT: ';' ~[\r\n]* ;

TRASH
    : ( WS | COMMENT ) -> channel(HIDDEN)
    ;

