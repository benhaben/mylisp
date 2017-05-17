/**
 * Created by shenyin.sy on 17/5/12.
 */

// TODO: create parser tree
// TODO: REPL
// TODO: use parser tree

var os = require('os');
var path = require('path');
//
// (function myLisp(){
//
//     const readline = require('readline');
//     const rl = readline.createInterface(process.stdin, process.stdout);
//
//     rl.setPrompt('myLisp> ');
//     rl.prompt();
//
//     rl.on('line', (line) => {
//         switch(line.trim()) {
//             case 'hello':
//                 console.log('world!');
//                 break;
//             default:
//                 console.log('Say what? I might have heard `' + line.trim() + '`');
//                 break;
//         }
//         rl.prompt();
//     }).on('close', () => {
//         console.log('Have a great day!');
//         process.exit(0);
//     });
//
//
// })();
var antlr4 = require('antlr4/index');
var SimpleLexer = require('./gen/SimpleLexer');
var SimpleParser = require('./gen/SimpleParser');
var SimpleListener = require('./gen/SimpleListener');

YearPrinter = function () {
    SimpleListener.SimpleListener.call(this);
    return this;
};
YearPrinter.prototype = Object.create(SimpleListener.SimpleListener.prototype);
YearPrinter.prototype.constructor = YearPrinter;
YearPrinter.prototype.exitYear = function (ctx) {
    console.log(ctx);
};

var input = "January 1900";
var chars = new antlr4.InputStream(input);
var lexer = new SimpleLexer.SimpleLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new SimpleParser.SimpleParser(tokens);
parser.buildParseTrees = true;
var tree = parser.date();
var printer = new YearPrinter();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);