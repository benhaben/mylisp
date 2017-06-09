# use JavaScript to implement toy lisp


[![Build Status](https://travis-ci.org/benhaben/mylisp.svg?branch=master)](https://travis-ci.org/benhaben/mylisp)
[![Coverage Status](https://coveralls.io/repos/github/benhaben/mylisp/badge.svg?branch=master)](https://coveralls.io/github/benhaben/mylisp?branch=master)


This project is a js-version of "buildyourownlisp" from http://www.buildyourownlisp.com/contents

Your can study how to implement a toy lisp in Javascript, i list some interesting technique which used in the project here:
1. use antlr to produce AST for mylisp
2. reduce antlr's AST levels to get a new tree
3. implement semantic by JS
4. add mocha, chai, sinon to test 
5. add ci and coverage

so if you dig into the code, you will get skills to use JS, some basic ideas about compiler and have ability to develop DSL.

# Test toy lisp

you can install toy lisp by npm:
```
npm install toy-lisp -g
```

please have a look at test case, there are a lot of examples.

# How to use

1. after installing toy-lsip, you can tab "ml" in the command.
```
ml
```

2. load lib
```
load "lib.lspy"
```
load is a builtin function of toy lisp.
"lib.lspy" is a standard lib.

3. call Fibonacci function in lib
```
fib 10
```
you will get 55

4. see test case to get more examples


# directory structure

Each directory is a chapter, you can read "buildyourownlisp" step by step, thanks anthor very much.

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

If you do not know antlr, you can have a look at `the-definitive-antlr-4-reference_p2_0`, the book is at doc directory. This book sales at http://www.antlr.org/. 

Antlr prepare grammars for a lot of language, please see https://github.com/antlr/grammars-v4/blob/master/clojure/Clojure.g4

## 2.polish_notation
you can study to parse polish notation.

this chapter discuss parsing polish notation very well.
http://www.buildyourownlisp.com/chapter6_parsing

## 3.qexpr
should read qexpr after sexqr.
http://www.buildyourownlisp.com/chapter10_q_expressions

## 4.sexpr
http://www.buildyourownlisp.com/chapter9_s_expressions

## 5.variables
http://www.buildyourownlisp.com/chapter11_variables

## 6.functions
http://www.buildyourownlisp.com/chapter12_functions

## 7.functions
http://www.buildyourownlisp.com/chapter13_conditionals

## 8.string
This is the last chapter to implement your own lisp.
You can study step by step because my code is total following http://www.buildyourownlisp.com/

# why re-implement
1. The best way to study coding is to complete a project, if you want to use JavaScript or want to know how to implement a langague parser, you may have interesting to reimplement. 
2. As a developer I want to know how compiler working. 
3. JavaScript has higher productivity than C

If you have question to ask me, please report a bug or add my wechat. My wechat number is benhaben.
