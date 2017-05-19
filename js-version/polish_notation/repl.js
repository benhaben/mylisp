/**
 * Created by shenyin.sy on 17/5/19.
 */


var os = require('os');
var path = require('path');

// 已经有在命令行处理方向键和保存历史记录的能力
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
const Parser = require('./parser').Parser;

rl.setPrompt('lispy> ');
rl.prompt();

rl.on('line', (line) => {
    const parser = new Parser(line);
    var r = parser.startVisitor();
    console.log(`结果是：${r}`);
    rl.prompt();
}).on('close', () => {
    console.log('\nHave a great day!');
    process.exit(0);
});



