"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleLogIn = exports.handleSignUp = void 0;
const database_1 = __importDefault(require("../../loaders/database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_1 = __importDefault(require("../../shared/jwt"));
const users_1 = require("../../models/users");
const handleSignUp = async (name, email, password, company) => {
    const collection = (await (0, database_1.default)()).collection('users');
    const user = await collection.findOne({ email });
    if (user) {
        throw new Error('User already exist with same email');
    }
    const saltRounds = 10;
    const hash = await bcrypt_1.default.hash(password, saltRounds);
    const newUser = new users_1.Users(new Date(), new Date(), name, email, hash, company, false);
    await collection.insertOne(newUser);
};
exports.handleSignUp = handleSignUp;
const handleLogIn = async (email, password) => {
    const data = await (await (0, database_1.default)()).collection('users').findOne({ email: email });
    if (!data) {
        throw { statusCode: 404, message: 'User Does Not Exsist' };
    }
    const res = await bcrypt_1.default.compare(password, data.password);
    if (!res) {
        throw { statusCode: 401, message: 'Incorrect Password / Not Allowed' };
    }
    const token = (0, jwt_1.default)(email);
    return {
        token,
        role: data.role,
        name: data.name
    };
};
exports.handleLogIn = handleLogIn;
//# sourceMappingURL=auth.service.js.map