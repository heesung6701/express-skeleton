const chai = require('chai');
const should = chai.should();
const { expect } = chai;
const container = require('../../../src/app/container');

describe('# boardService Test', () => {
    let boardService;

    before(() => {
        boardService = container.get('BoardService');
    })

    it('# method1 Test', () => {
        boardService.method1();
    })
    it('# method2 Test', () => {
        boardService.method2();
    })
});