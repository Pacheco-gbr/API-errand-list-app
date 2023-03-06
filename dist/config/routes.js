"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesApp = void 0;
const express_1 = __importDefault(require("express"));
const errands_routes_1 = require("../features/errands/errands.routes");
const users_routes_1 = require("../features/users/users.routes");
const initialPage_1 = require("./initialPage");
const routesApp = (app) => {
    const router = express_1.default.Router();
    app.use('/', router);
    router.get('/', (request, response) => response.send(initialPage_1.initialPage));
    (0, users_routes_1.userRoutes)(router);
    (0, errands_routes_1.errandRoutes)(router);
};
exports.routesApp = routesApp;
