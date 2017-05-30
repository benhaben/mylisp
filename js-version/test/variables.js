/**
 * Created by shenyin.sy on 17/5/25.
 */

"use strict";
const index = require('../variables/index');
const Parser = index.Parser
    , expect = require('chai').expect
    , SimpleAst = index.SimpleAst
    , Lval = index.Lval
    , Lispy = index.Lispy;

describe('variables', function () {

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

        expect(r.value()).to.equal('<function>');
    });

    it('should parser  eval (head {+ - + - * /}) ', function () {

        let line = " eval (head {+ - + - * /})";
        let lispy = new Lispy();
        let r = lispy.start_eval(line);

        expect(r.value()).to.equal('<function>');
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

        expect(r.value()).to.equal('unbound symbol!');
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
            let r =lispy.start_eval(line);
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
});
