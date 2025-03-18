const signUp = require("../backend/routes/sign_up");
const signIn = require("../backend/routes/sign_in");
const users = require("../backend/routes/users");
const chat = require("../backend/routes/chat");

module.exports.initialize = (app) => {
    console.log("✅ Routes Initialized");

    app.use("/sign_up", signUp);
    app.use("/sign_in", signIn);
    app.use("/users", users);
    app.use("/chat", chat);
};
