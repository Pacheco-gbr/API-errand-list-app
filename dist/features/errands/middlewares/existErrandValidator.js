"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.existErrandValidator = void 0;
const users_1 = require("../../../database/users");
const existErrandValidator = (req, res, next) => {
    const listOfUsers = (0, users_1.getUsers)();
    const { id, idErrand } = req.params;
    const user = listOfUsers.find((user) => user.id === id);
    const errand = user === null || user === void 0 ? void 0 : user.errands.some((errand) => errand.id === idErrand);
    if (!errand) {
        const response = {
            success: false,
            message: "Errand not found!",
            data: null,
        };
        return res.status(400).json(response);
    }
    return next();
};
exports.existErrandValidator = existErrandValidator;
