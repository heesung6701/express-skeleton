const chai = require('chai');
const should = chai.should();
const { expect } = chai;
const container = require('../../../src/app/container');

describe('# commentService Test', () => {
    let commentService;
    before(() => {
        commentService = container.get('CommentService');
    })

    it('# signIn Test', () => {
        commentService.signIn();
    })
    it('# signUp Test', () => {
        commentService.signUp();
    })
    it('# logout Test', () => {
        commentService.logout();
    })
});