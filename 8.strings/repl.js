#!/usr/bin/env node

"use strict";

const Lispy = require('./lispy').Lispy;
let lispy = new Lispy();

if (process.argv.length === 2) {

    // 已经有在命令行处理方向键和保存历史记录的能力
    const readline = require('readline');
    const rl = readline.createInterface(process.stdin, process.stdout);

    rl.setPrompt('lispy> ');
    rl.prompt();

    rl.on('line', (line) => {
        let r = lispy.start_eval(line);
        lispy.println(r);
        rl.prompt();
    }).on('close', () => {
        process.exit(0);
    });
} else if (process.argv.length === 3) {
    let filePath = process.argv[2];

    var rf=require("fs");
    rf.readFile(filePath,'utf-8',function(err,data){
        if(err){
            console.log(`Can not load file from "${filePath}" !\n`);
        }else{
            lispy.start_eval_file(data);
        }
        process.exit(0);
    });
}