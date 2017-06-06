/**
 * Created by shenyin.sy on 17/5/25.
 */

"use strict";
const index = require('../8.strings/index');
const Parser = index.Parser
    , expect = require('chai').expect
    , SimpleAst = index.SimpleAst
    , Lval = index.Lval
    , Lispy = index.Lispy;

describe('8.strings.js', function () {

    it('should parser number 2 ', function () {

        let line = "2";

        let lispy = new Lispy();
        let r = lispy.start_eval(line);

        expect(r.value()).to.equal(2);
    });

    it('should parser + ', function () {

        let line = "+ ";

        let lispy = new Lispy();
        let r = lispy.start_eval(line);

        expect(r.value()).to.equal('<builtin>');
    });

    it('should parser  eval (head {+ - + - * /}) ', function () {

        let line = " eval (head {+ - + - * /})";
        let lispy = new Lispy();
        let r = lispy.start_eval(line);

        expect(r.value()).to.equal('<builtin>');
    });


    it('should parser  (eval (head {+ - + - * /})) 10 20 ', function () {

        let line = " (eval (head {+ - + - * /})) 10 20";

        let lispy = new Lispy();
        let r = lispy.start_eval(line);

        expect(r.value()).to.equal(30);
    });

    it('should parser  hello ', function () {

        let line = "hello";

        let lispy = new Lispy();
        let r = lispy.start_eval(line);

        expect(r.value()).to.equal('unbound symbol hello!');
    });

    it('should parser + 1 2', function () {

        let line = "+ 1 2";

        let lispy = new Lispy();
        let r = lispy.start_eval(line);

        expect(r.value()).to.equal(3);
    });

    it('should parser (+ 1 2)', function () {

        let line = "(+ 1 2)";

        let lispy = new Lispy();
        let r = lispy.start_eval(line);

        expect(r.value()).to.equal(3);

    });

    it('should parser ()', function () {
        let line = "()";

        let lispy = new Lispy();
        let r = lispy.start_eval(line);

        expect(r.value()).to.equal("()");

    });

    it('should parser "(+ (* 1 2) (/ 4 2))" ', function () {
        const line = "(+ (* 1 2) (/ 4 2))";
        let lispy = new Lispy();
        let r = lispy.start_eval(line);

        expect(r.value()).to.equal(4);
    });

    it('should parser "head {1 {2 3} {4 5}}" ', function () {
        const line = "head {1 {2 3} {4 5}}";
        let lispy = new Lispy();
        let r = lispy.start_eval(line);

        expect(r.value()).to.equal("{1}");
    });

    it('should parser "tail {1 {2 3} {4 5}}" ', function () {
        const line = "tail {1 {2 3} {4 5}}";
        let lispy = new Lispy();
        let r = lispy.start_eval(line);
        expect(r.value()).to.equal("{{2 3} {4 5}}");
    });

    it('should parser "list 1 {2 3} {4 5}" ', function () {
        const line = "list 1 {2 3} {4 5}";
        let lispy = new Lispy();
        let r = lispy.start_eval(line);
        expect(r.value()).to.equal("{1 {2 3} {4 5}}");
    });

    it('should parser "eval {head (tail (list 1 {2 3} {4 5}))}" ', function () {
        const line = "eval {head (tail (list 1 {2 3} {4 5}))}";
        let lispy = new Lispy();
        let r = lispy.start_eval(line);
        expect(r.value()).to.equal("{{2 3}}");
    });
    describe('test def', function () {
        let lispy = new Lispy();
        before(function () {
        });
        after(function () {
        });
        beforeEach(function () {
        });
        afterEach(function () {
        });
        it('def {x} 100', function () {
            const line = "def {x} 100";
            lispy.start_eval(line);
            let r = lispy.start_eval("x");
            expect(r.value()).to.equal(100);
        });

        it('def {y} 200', function () {
            const line = "def {y} 200";
            lispy.start_eval(line);
            let r = lispy.start_eval("y");
            expect(r.value()).to.equal(200);
        });

        it('use x,y : + x y', function () {
            const line = "+ x y";
            let r = lispy.start_eval(line);
            expect(r.value()).to.equal(300);
        });

        it('def {a b} 5 6', function () {
            const line = "def {a b} 5 6";
            lispy.start_eval(line);
            let r = lispy.start_eval("+ a b");
            expect(r.value()).to.equal(11);
        });

        it('def {arglist} {a b x y}', function () {
            const line = "def {arglist} {a b x y}";
            lispy.start_eval(line);
            lispy.start_eval("def arglist 1 2 3 4");
            let r = lispy.start_eval("list a b x y");
            expect(r.value()).to.equal("{1 2 3 4}");
        });
    });

    describe('test functions and conditionals', function () {
        let lispy = new Lispy();

        it('def {add-mul} (\\ {x y} {+ x (* x y)})', function () {
            const line = "def {add-mul} (\\ {x y} {+ x (* x y)})";
            let r = lispy.start_eval(line);
            expect(r.value()).to.equal("()");
        });

        it('add-mul 10 20', function () {
            const line = "add-mul 10 20";
            let r = lispy.start_eval(line);
            expect(r.value()).to.equal(210);
        });

        it('add-mul 10', function () {
            const line = "add-mul 10";
            let r = lispy.start_eval(line);
            expect(r.value()).to.equal("(\\ {y} {+ x (* x y)})");
        });

        it('def {add-mul-ten} (add-mul 10)', function () {
            const line = "def {add-mul-ten} (add-mul 10)";
            let r = lispy.start_eval(line);
            expect(r.value()).to.equal("()");
        });

        it('add-mul-ten 50', function () {
            const line = "add-mul-ten 50";
            let r = lispy.start_eval(line);
            expect(r.value()).to.equal(510);
        });

        it('def {fun} (\ {args body} {def (head args) (\ (tail args) body)})', function () {
            const line = "def {fun} (\\ {args body} {def (head args) (\\ (tail args) body)})";
            let r = lispy.start_eval(line);
            expect(r.value()).to.equal("()");
        });

        it('fun {add-together x y} {+ x y}', function () {
            const line = "fun {add-together x y} {+ x y}";
            let r = lispy.start_eval(line);
            r = lispy.start_eval("add-together 1 2");
            expect(r.value()).to.equal(3);
        });

        it('uncurry - pack, curry - unpack', function () {
            let r = lispy.start_eval("fun {unpack f xs} {eval (join (list f) xs)}");
            r = lispy.start_eval("fun {pack f & xs} {f xs}");
            r = lispy.start_eval("def {uncurry} pack");
            r = lispy.start_eval("def {curry} unpack");
            r = lispy.start_eval("curry + {5 6 7}");
            expect(r.value()).to.equal(18);
            r = lispy.start_eval("uncurry head 5 6 7");
            expect(r.value()).to.equal("{5}");
            r = lispy.start_eval("def {add-uncurried} +");
            r = lispy.start_eval("def {add-curried} (curry +)");
            r = lispy.start_eval("add-curried {5 6 7}");
            expect(r.value()).to.equal(18);
            r = lispy.start_eval("add-uncurried 5 6 7");
            expect(r.value()).to.equal(18);
        });

        it('== x +', function () {
            const line = " def {x} fun";
            let r = lispy.start_eval(line);
            r = lispy.start_eval("== x +");
            expect(r.value()).to.equal(0);
        });


        it('> 10 5', function () {
            const line = "> 10 5";
            let r = lispy.start_eval(line);
            expect(r.value()).to.equal(1);
        });

        it('<= 88 5', function () {
            const line = "<= 88 5";
            let r = lispy.start_eval(line);
            expect(r.value()).to.equal(0);
        });

        it('== 5 6', function () {
            const line = "== 5 6";
            let r = lispy.start_eval(line);
            expect(r.value()).to.equal(0);
        });

        it('== 5 {}', function () {
            const line = "== 5 {}";
            let r = lispy.start_eval(line);
            expect(r.value()).to.equal(0);
        });

        it('== 1 1', function () {
            const line = "== 1 1";
            let r = lispy.start_eval(line);
            expect(r.value()).to.equal(1);
        });

        it('!= {} 56', function () {
            const line = "!= {} 56";
            let r = lispy.start_eval(line);
            expect(r.value()).to.equal(1);
        });

        it('== {1 2 3 {5 6}} {1   2  3   {5 6}}', function () {
            const line = "== {1 2 3 {5 6}} {1   2  3   {5 6}}";
            let r = lispy.start_eval(line);
            expect(r.value()).to.equal(1);
        });

        it('if condition', function () {
            const line = "def {x y} 100 200";
            let r = lispy.start_eval(line);
            r = lispy.start_eval("if (== x y) {+ x y} {- x y}");
            expect(r.value()).to.equal(-100);
        });

        it('Recursive Functions: (fun {len l} {if (== l {}){0}{+ 1 (len (tail l))}})', function () {
            const line = "(fun {len l} {if (== l {}){0}{+ 1 (len (tail l))}})";
            let r = lispy.start_eval(line);
            r = lispy.start_eval("len {1 2 3}");
            expect(r.value()).to.equal(3);
        });

        it('Recursive Functions: (fun {reverse l} {if (== l {}){{}}{join (reverse (tail l)) (head l)}})', function () {
            const line = "(fun {reverse l} {if (== l {}){{}}{join (reverse (tail l)) (head l)}})";
            let r = lispy.start_eval(line);
            r = lispy.start_eval("reverse {1 2 3}");
            expect(r.value()).to.equal("{3 2 1}");
        });


    });

    describe('test strings', function () {
        let lispy = new Lispy();

        it('"hello"', function () {
            const line = '"hello"';
            let r = lispy.start_eval(line);
            expect(r.value()).to.equal('"hello"');
        });

        it('"hello\\""', function () {
            const line = '"hello\\""';
            let r = lispy.start_eval(line);
            expect(r.value()).to.equal('"hello\\""');
        });

        it('"hello\\n"', function () {
            const line = '"hello\\n"';
            let r = lispy.start_eval(line);
            expect(r.value()).to.equal('"hello\\n"');
        });

        it('head {"hello" "world"}', function () {
            const line = 'head {"hello" "world"}';
            let r = lispy.start_eval(line);
            expect(r.value()).to.equal('{"hello"}');
        });

        it('eval (head {"hello" "world"})', function () {
            const line = 'eval (head {"hello" "world"})';
            let r = lispy.start_eval(line);
            expect(r.value()).to.equal('"hello"');
        });
    });

});
