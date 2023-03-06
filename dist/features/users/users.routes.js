"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const users_controllers_1 = require("./controllers/users.controllers");
const emailUser_validator_1 = require("./middlewares/emailUser.validator");
const userData_validator_1 = require("./middlewares/userData.validator");
const userID_validator_1 = require("./middlewares/userID.validator");
const userRoutes = (router) => {
    router.post("/users", emailUser_validator_1.emailUserValidator, userData_validator_1.userDataValidator, new users_controllers_1.UserController().createUser);
    router.get("/users", new users_controllers_1.UserController().getUsers);
    router.get("/users/:id", userID_validator_1.userIDValidator, new users_controllers_1.UserController().getUserById);
};
exports.userRoutes = userRoutes;
