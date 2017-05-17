grammar Simple;

date : month year ;
month : MONTH ;
year : YEAR ;

MONTH : 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December' ;
YEAR : [1-9][0-9][0-9][0-9] ;

WS : [ \t\r\n]+ -> skip ;