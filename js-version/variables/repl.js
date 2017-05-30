"use strict";

var os = require('os');
var path = require('path');

// 已经有在命令行处理方向键和保存历史记录的能力
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

const Lispy = require('./lispy').Lispy;

rl.setPrompt('lispy> ');
rl.prompt();

//env should be reused
let lispy = new Lispy();

rl.on('line', (line) => {

    //1. create antlr tree
    const parser = new Parser(line);

    //2. convert to ast, get lval
    parser.startWalk(parser.tree);

    //3. semantics
    let r = lispy.start_eval(parser.root);

    //4. print result
    lispy.println(r);
    rl.prompt();
}).on('close', () => {
    process.exit(0);
});
