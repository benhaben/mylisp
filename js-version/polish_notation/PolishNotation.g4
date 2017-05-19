grammar PolishNotation;

lispy    : expr+;
expr     : NUMBER | '(' operator expr+ ')' ;

NUMBER : [0-9]+ ;
operator : MUL | DIV | ADD | SUB ;
WS : [ \t\r\n]+ -> skip ;
MUL :   '*' ; // assigns token name to '*' used above in grammar
DIV :   '/' ;
ADD :   '+' ;
SUB :   '-' ;