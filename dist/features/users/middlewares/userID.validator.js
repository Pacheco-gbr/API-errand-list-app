"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userIDValidator = void 0;
const users_1 = require("../../../database/users");
const userIDValidator = (req, res, next) => {
    const listOfUsers = (0, users_1.getUsers)();
    const { id } = req.params;
    const exist = listOfUsers.some((user) => user.id === id);
    if (!exist) {
        const response = {
            success: false,
            message: "This id didn't match with any user.",
            data: null,
        };
        return res.status(400).json(response);
    }
    return next();
};
exports.userIDValidator = userIDValidator;
