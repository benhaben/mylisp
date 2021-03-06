

grammar Strings;

lispy    : expr*;

expr   : NUMBER | SYMBOL | sexpr | qexpr | string ;

sexpr  : LP expr*  RP;

qexpr  : LB expr* RB ;

NUMBER : '-'?[0-9]+ ;

COMMENT: ';' ~[\r\n]* -> skip ;

string : STRING ;

STRING : '"' ( ~'"' | '\\' '"' )* '"' ;

SYMBOL : ([0-9]|'a'..'z'|'A'.. 'Z'|'_'|ADD|SUB|MUL|DIV|'$'|'!'|'&'|'\\'|'>'|'<'|'>='|'<='|'=='|'!='|'=' )+;

LP  :   '(';
RP  :   ')';
LB  :   '{';
RB  :   '}';
MUL :   '*' ; // assigns token name to '*' used above in grammar
DIV :   '/' ;
ADD :   '+' ;
SUB :   '-' ;

WS : [ \t\r\n]+ -> skip ;
