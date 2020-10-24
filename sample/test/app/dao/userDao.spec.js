const chai = require('chai');
const should = chai.should();
const { expect } = chai;
const userDao = require('../../../src/app/dao/userDao');

describe('# commentDao Test', () => {
    it('# getAll Test', () => {
        expect(userDao.getAll()).to.have.lengthOf.above(0);
    })
    it('# getById Test', () => {
        expect(userDao.getById(24).id).to.equal(24);
    })
    it('# insert Test', () => {
        expect(userDao.insert()).to.be.true;
    })
    it('# update Test', () => {
        expect(userDao.update()).to.be.true;
    })
    it('# remove Test', () => {
        expect(userDao.remove()).to.be.true;
    })
})