/**
 * Created by shenyin.sy on 17/5/12.
 */

// TODO: use parser tree

var os = require('os');
var path = require('path');

// 已经有在命令行处理方向键和保存历史记录的能力
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const Parser = require('./parser').LispParser;
const Listener = require('./parser').LispListener;
const ErrorListener = require('./parser').ErrorListener;


rl.setPrompt('lispy> ');
rl.prompt();

rl.on('line', (line) => {
    const listener = new Listener();
    const errorListener = new ErrorListener();
    const parser = new Parser(line, listener, errorListener);
    parser.walk();

    rl.prompt();
}).on('close', () => {
    console.log('Have a great day!');
    process.exit(0);
});



