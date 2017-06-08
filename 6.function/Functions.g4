/*
"                                                     \
    number : /-?[0-9]+/ ;                               \
    symbol : /[a-zA-Z0-9_+\\-*\\/\\\\=<>!&]+/ ;         \
    sexpr  : '(' <expr>* ')' ;                          \
    qexpr  : '{' <expr>* '}' ;                          \
    expr   : <number> | <symbol> | <sexpr> | <qexpr> ;  \
    lispy  : /^/ <expr>* /$/ ;                          \
  ",
*/

grammar Functions;

lispy    : expr*;

expr   : NUMBER | SYMBOL | sexpr | qexpr;

sexpr  : LP expr*  RP;

qexpr  : LB expr* RB ;

NUMBER : '-'?[0-9]+ ;

SYMBOL : ([0-9]|'a'..'z'|'A'.. 'Z'|'_'|ADD|SUB|MUL|DIV|'$'|'!'|'&'|'\\')+;

LP  :   '(';
RP  :   ')';
LB  :   '{';
RB  :   '}';
MUL :   '*' ; // assigns token name to '*' used above in grammar
DIV :   '/' ;
ADD :   '+' ;
SUB :   '-' ;

WS : [ \t\r\n]+ -> skip ;
