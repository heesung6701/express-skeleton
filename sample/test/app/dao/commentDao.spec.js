const chai = require('chai');
const should = chai.should();
const { expect } = chai;
const commentDao = require('../../../src/app/dao/commentDao');

describe('# commentDao Test', () => {
    it('# getAll Test', () => {
        expect(commentDao.getAll()).to.have.lengthOf.above(0);
    })
    it('# getById Test', () => {
        expect(commentDao.getById(24).id).to.equal(24);
    })
    it('# insert Test', () => {
        expect(commentDao.insert()).to.be.true;
    })
    it('# update Test', () => {
        expect(commentDao.update()).to.be.true;
    })
    it('# remove Test', () => {
        expect(commentDao.remove()).to.be.true;
    })
})