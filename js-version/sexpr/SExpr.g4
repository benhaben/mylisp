grammar SExpr;

lispy    : expr*;

expr   : NUMBER | OPERATOR | sexpr ;

sexpr  : LP expr*  RP;

NUMBER : [0-9]+ ;

OPERATOR : MUL | DIV | ADD | SUB ;
LP  :   '(';
RP  :   ')';
MUL :   '*' ; // assigns token name to '*' used above in grammar
DIV :   '/' ;
ADD :   '+' ;
SUB :   '-' ;

WS : [ \t\r\n]+ -> skip ;
