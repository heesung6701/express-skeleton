module.exports = {
    getAll: (boardId) => {
        return [{
            id: 0,
            boardId: boardId,
            content: 'dummy content'
        }, {
            id: 1,
            boardId: boardId,
            content: 'dummy content'
        }, {
            id: 2,
            boardId: boardId,
            content: 'dummy content'
        }];
    },
    getById: (id) => {
        return {
            id: id,
            boardId: 0,
            content: 'dummy content'
        };
    },
    insert: () => {
        return true;
    },
    update: () => {
        return true;
    },
    remove: () => {
        return true;
    }
}