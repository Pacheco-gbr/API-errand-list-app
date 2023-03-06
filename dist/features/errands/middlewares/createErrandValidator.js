"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createErrandValidator = void 0;
const createErrandValidator = (req, res, next) => {
    const { description, detail } = req.body;
    if (!description || !detail) {
        const response = {
            success: false,
            message: "All parameters must be sent.",
            data: null,
        };
        return res.status(400).json(response);
    }
    return next();
};
exports.createErrandValidator = createErrandValidator;
