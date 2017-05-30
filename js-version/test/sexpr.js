/**
 * Created by shenyin.sy on 17/5/22.
 */


var Parser = require('../4.sexpr/parser').Parser
    , expect = require('chai').expect;
// var expect = chai.expect;    // Using Expect style

describe('s-expression', function(){
    it('should parser (+ 1 2)', function(){
        const parser = new Parser("(+ 1 2)");
        var r = parser.startVisitor();
        expect(r).to.equal(3);

    })

    it('should parser ()', function(){
        const parser = new Parser("()");
        var r = parser.startVisitor();
        expect(r).to.equal("()");

    })

    it('should parser empty string', function(){
        const parser = new Parser("");
        var r = parser.startVisitor();
        expect(r).to.be.a('undefined');
    })

    it('should parser "(+ (* 1 2) (/ 4 2))" ', function(){
        const parser = new Parser("(+ (* 1 2) (/ 4 2))");
        var r = parser.startVisitor();
        expect(r).to.equal(4);
    })

    it('should parser "(+ 1 +)" ', function(){
        const parser = new Parser("(+ 1 +)");
        var r = parser.startVisitor();
        expect(r).to.be.a('string');
    })

    // it('should run the callback for a method just once', function(done){
    //     var app = express()
    //         , n = 0;
    //
    //     app.all('/*', function(req, res, next){
    //         if (n++) return done(new Error('DELETE called several times'));
    //         next();
    //     });
    //
    //     request(app)
    //         .del('/tobi')
    //         .expect(404, done);
    // })
});
