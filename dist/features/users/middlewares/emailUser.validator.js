"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailUserValidator = void 0;
const users_1 = require("../../../database/users");
const emailUserValidator = (req, res, next) => {
    try {
        const listOfUsers = (0, users_1.getUsers)();
        const { email } = req.body;
        const exist = listOfUsers.some((user) => user.email === email);
        if (exist) {
            const response = {
                success: false,
                message: "This email has already been registered.",
                data: null,
            };
            return res.status(400).json(response);
        }
        return next();
    }
    catch (error) {
        const response = {
            success: false,
            message: "Error.",
            data: null,
        };
        return res.status(400).json(response);
    }
};
exports.emailUserValidator = emailUserValidator;
