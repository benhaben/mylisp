# use JavaScript to implement my lisp


[![Build Status](https://travis-ci.org/benhaben/mylisp.svg?branch=master)](https://travis-ci.org/benhaben/mylisp)
[![Coverage Status](https://coveralls.io/repos/github/benhaben/mylisp/badge.svg?branch=master)](https://coveralls.io/github/benhaben/mylisp?branch=master)


This project is a js-version of "buildyourownlisp" from http://www.buildyourownlisp.com/contents

Your can study how to implement a toy lisp in Javascript, i list some interesting technique which i used in the project here:
1. use antlr to produce AST for mylisp
2. reduce antlr's AST levels to get a new tree
3. implement semantic by JS
4. add mocha, chai, sinon to test 
5. add ci and coverage

so if you dig into the code, you will get skills to use JS.

#directory structure of source code 

## 1.date_example

use antlr to parse date. 

```
grammar Simple;

date : month year ;
month : MONTH ;
year : YEAR ;

MONTH : 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December' ;
YEAR : [1-9][0-9][0-9][0-9] ;

WS : [ \t\r\n]+ -> skip ;

```

if you do not know antlr, you can have a look at `the-definitive-antlr-4-reference_p2_0`, the book is at doc directory.
this book sales at http://www.antlr.org/. 

antlr prepare grammars for a lot of language, please see https://github.com/antlr/grammars-v4/blob/master/clojure/Clojure.g4

## 2.polish_notation
you can study to parse polish notation.

this chapter discuss parsing polish notation very well.
http://www.buildyourownlisp.com/chapter6_parsing

## 8.string
this is the last chapter to implement your own lisp.
you can study step by step because my code is total following http://www.buildyourownlisp.com/

# why re-implement
The best way to study coding is to do a project, i want to have my own lisp because every developer want to know how compiler working.
If you have question to ask me when you read the code, please report a bug and i will discuss with you.

if you use wechat, you can add me and discuss software problems with me.
my wechat number is benhaben.