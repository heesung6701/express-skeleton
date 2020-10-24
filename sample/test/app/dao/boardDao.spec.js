const chai = require('chai');
const should = chai.should();
const { expect } = chai;
const boardDao = require('../../../src/app/dao/boardDao');

describe('# boardDao Test', () => {
    it('# getAll Test', () => {
        expect(boardDao.getAll()).to.have.lengthOf.above(0);
    })
    it('# getById Test', () => {
        expect(boardDao.getById(24).id).to.equal(24);
    })
    it('# insert Test', () => {
        expect(boardDao.insert()).to.be.true;
    })
    it('# update Test', () => {
        expect(boardDao.update()).to.be.true;
    })
    it('# remove Test', () => {
        expect(boardDao.remove()).to.be.true;
    })
})