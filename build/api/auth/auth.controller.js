"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logIn = exports.signUp = void 0;
const auth_service_1 = require("./auth.service");
const signUp = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        await (0, auth_service_1.handleSignUp)(name, email, password, role);
        res.status(201).json({ success: true, message: `user with ${role} role created successfully` });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.signUp = signUp;
const logIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const data = await (0, auth_service_1.handleLogIn)(email, password);
        res.status(200).json({ success: true, data });
    }
    catch (error) {
        res.status(error.statusCode).json({ message: error.message });
    }
};
exports.logIn = logIn;
//# sourceMappingURL=auth.controller.js.map