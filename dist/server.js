"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./config/routes");
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const allowedOrigins = ["*"];
const options = {
    origin: allowedOrigins,
};
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const port = process.env.PORT;
(0, routes_1.routesApp)(app);
app.listen(8080, () => console.log('The API is running.'));
//console.log(Boolean(false))
