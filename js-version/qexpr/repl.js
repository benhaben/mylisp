"use strict";

var os = require('os');
var path = require('path');

// 已经有在命令行处理方向键和保存历史记录的能力
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const Parser = require('./parser').Parser;
const SimpleAst = require('./ast').SimpleAst;
const Lval = require('./ast').Lval;
const Lispy = require('./lispy').Lispy;

rl.setPrompt('lispy> ');
rl.prompt();

rl.on('line', (line) => {

    //1. create antlr tree
    const parser = new Parser(line);

    //2. convert to ast, get lval
    let ast = new SimpleAst();
    ast.startWalk(parser.tree);
    console.log(ast.toString());

    //3. semantics
    let lispy = new Lispy();
    let r = lispy.eval(ast.root);

    //4. print result
    lispy.println(r);

    rl.prompt();
}).on('close', () => {
    process.exit(0);
});


// TODO: 统一错误处理