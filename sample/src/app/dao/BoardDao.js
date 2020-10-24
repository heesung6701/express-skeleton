module.exports = {
    getAll: () => {
        return [{
            id: 0,
            title: 'dummy title',
            content: 'dummy content'
        }, {
            id: 1,
            title: 'dummy title',
            content: 'dummy content'
        }, {
            id: 2,
            title: 'dummy title',
            content: 'dummy content'
        }];
    },
    getById: (id) => {
        return {
            id: id,
            title: 'dummy title',
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