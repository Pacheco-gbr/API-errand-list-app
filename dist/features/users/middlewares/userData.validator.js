"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDataValidator = void 0;
const userDataValidator = (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            const response = {
                success: false,
                message: "You must sent all the parameters.",
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
exports.userDataValidator = userDataValidator;
