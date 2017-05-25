/**
 * Created by shenyin.sy on 17/5/25.
 */

"use strict";
const index = require('../qexpr/index');
const Parser = index.Parser
    , expect = require('chai').expect
    , SimpleAst = index.SimpleAst
    , Lval = index.Lval
    , Lispy = index.Lispy;

describe('q-expression', function(){

    it('should parser number 2 ', function(){

        let line = "2";

        //1. create antlr tree
        const parser = new Parser(line);

        //2. convert to ast, get lval
        let ast = new SimpleAst();
        ast.startWalk(parser.tree);

        //3. semantics
        let lispy = new Lispy();
        let r = lispy.eval(ast.root);

        expect(r.value()).to.equal(2);
    });

    it('should parser + ', function(){

        let line = "+ ";

        //1. create antlr tree
        const parser = new Parser(line);

        //2. convert to ast, get lval
        let ast = new SimpleAst();
        ast.startWalk(parser.tree);

        //3. semantics
        let lispy = new Lispy();
        let r = lispy.eval(ast.root);

        expect(r.value()).to.equal('+');
    });

    it('should parser + 1 2', function(){

        let line = "+ 1 2";

        //1. create antlr tree
        const parser = new Parser(line);

        //2. convert to ast, get lval
        let ast = new SimpleAst();
        ast.startWalk(parser.tree);

        //3. semantics
        let lispy = new Lispy();
        let r = lispy.eval(ast.root);

        expect(r.value()).to.equal(3);
    });

    it('should parser (+ 1 2)', function(){

        let line = "(+ 1 2)";

        //1. create antlr tree
        const parser = new Parser(line);

        //2. convert to ast, get lval
        let ast = new SimpleAst();
        ast.startWalk(parser.tree);

        //3. semantics
        let lispy = new Lispy();
        let r = lispy.eval(ast.root);

        expect(r.value()).to.equal(3);

    });

    it('should parser ()', function(){
        let line = "()";

        //1. create antlr tree
        const parser = new Parser(line);

        //2. convert to ast, get lval
        let ast = new SimpleAst();
        ast.startWalk(parser.tree);

        //3. semantics
        let lispy = new Lispy();
        let r = lispy.eval(ast.root);

        expect(r.value()).to.equal("()");

    });

    it('should parser "(+ (* 1 2) (/ 4 2))" ', function(){
        const line = "(+ (* 1 2) (/ 4 2))";

        //1. create antlr tree
        const parser = new Parser(line);

        //2. convert to ast, get lval
        let ast = new SimpleAst();
        ast.startWalk(parser.tree);

        //3. semantics
        let lispy = new Lispy();
        let r = lispy.eval(ast.root);

        expect(r.value()).to.equal(4);
    });

    it('should parser "head {1 {2 3} {4 5}}" ', function(){
        const line = "head {1 {2 3} {4 5}}";

        //1. create antlr tree
        const parser = new Parser(line);

        //2. convert to ast, get lval
        let ast = new SimpleAst();
        ast.startWalk(parser.tree);

        //3. semantics
        let lispy = new Lispy();
        let r = lispy.eval(ast.root);

        expect(r.value()).to.equal("{1}");
    });

    it('should parser "tail {1 {2 3} {4 5}}" ', function(){
        const line = "tail {1 {2 3} {4 5}}";

        //1. create antlr tree
        const parser = new Parser(line);

        //2. convert to ast, get lval
        let ast = new SimpleAst();
        ast.startWalk(parser.tree);

        //3. semantics
        let lispy = new Lispy();
        let r = lispy.eval(ast.root);

        expect(r.value()).to.equal("{{2 3} {4 5}}");
    });

    it('should parser "list 1 {2 3} {4 5}" ', function(){
        const line = "list 1 {2 3} {4 5}";

        //1. create antlr tree
        const parser = new Parser(line);

        //2. convert to ast, get lval
        let ast = new SimpleAst();
        ast.startWalk(parser.tree);

        //3. semantics
        let lispy = new Lispy();
        let r = lispy.eval(ast.root);

        expect(r.value()).to.equal("{1 {2 3} {4 5}}");
    });

    it('should parser "eval {head (tail (list 1 {2 3} {4 5}))}" ', function(){
        const line = "eval {head (tail (list 1 {2 3} {4 5}))}";

        //1. create antlr tree
        const parser = new Parser(line);

        //2. convert to ast, get lval
        let ast = new SimpleAst();
        ast.startWalk(parser.tree);

        //3. semantics
        let lispy = new Lispy();
        let r = lispy.eval(ast.root);

        expect(r.value()).to.equal("{{2 3}}");
    });
});
