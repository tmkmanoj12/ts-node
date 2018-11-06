import * as chai from 'chai'
import * as mocha from "mocha"
chai.should()
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            var foo = 'bar'
                , beverages = { tea: ['chai', 'matcha', 'oolong'] };

            foo.should.be.a('string');
            foo.should.equal('bar');
            foo.should.have.lengthOf(3);
            beverages.should.have.property('tea').with.lengthOf(3);

        });
    });
});