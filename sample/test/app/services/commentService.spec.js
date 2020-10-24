const chai = require('chai');
const should = chai.should();
const { expect } = chai;
const container = require('../../../src/app/container');

describe('# commentService Test', () => {
    let commentService;

    before(() => {
        commentService = container.get('CommentService');
    })

    it('# method1 Test', () => {
        commentService.method1();
    })
    it('# method2 Test', () => {
        commentService.method2();
    })
});