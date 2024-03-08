"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
exports.default = () => {
    const app = (0, express_1.Router)();
    //TODO: add routes here...
    app.post('/signup', auth_controller_1.signUp);
    app.post('/login', auth_controller_1.logIn);
    return app;
};
//# sourceMappingURL=auth.router.js.map