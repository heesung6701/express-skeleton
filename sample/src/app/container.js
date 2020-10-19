const modules = {};

const constructors = {
    AuthService: require("./services/AuthService"),
    BoardService: require("./services/BoardService"),
    CommentService: require('./services/CommentService'),
};

module.exports.get = (name) => {
    if (!modules[name]) {
        modules[name] = new constructors[name]();
    }
    return modules[name];
};

module.exports.register = (name) => {
    if (!modules[name]) {
        throw new Error("Already registered Name");
    }
    modules[name] = new constructors[name]();
}