grammar QExpr;

lispy    : expr*;

expr   : NUMBER | OPERATOR | sexpr | qexpr;

sexpr  : LP expr*  RP;

qexpr  : LB expr* RB ;

NUMBER : [0-9]+ ;

OPERATOR : MUL | DIV | ADD | SUB | LIST | HEAD | TAIL | JOIN | EVAL;

LP  :   '(';
RP  :   ')';
LB  :   '{';
RB  :   '}';
MUL :   '*' ; // assigns token name to '*' used above in grammar
DIV :   '/' ;
ADD :   '+' ;
SUB :   '-' ;
LIST:   'list';
HEAD:   'head';
TAIL:   'tail';
JOIN:   'join';
EVAL:   'eval';

WS : [ \t\r\n]+ -> skip ;
