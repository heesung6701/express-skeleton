const modules = {};

const constructors = {
    AuthService: require("./services/authService"),
    BoardService: require("./services/boardService"),
    CommentService: require('./services/commentService'),
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