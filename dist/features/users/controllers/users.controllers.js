"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const users_1 = require("../../../database/users");
const models_1 = require("../../../models");
class UserController {
    createUser(req, res) {
        try {
            const listOfUsers = (0, users_1.getUsers)();
            const { name, email, password } = req.body;
            const newUser = new models_1.User({ name, email, password });
            listOfUsers.push(newUser);
            (0, users_1.saveUsers)(listOfUsers);
            const response = {
                success: true,
                message: "User created.",
                data: newUser.handleProperties(),
            };
            return res.status(200).json(response);
        }
        catch (error) {
            const response = {
                success: false,
                message: "User not created.",
                data: null,
            };
            return res.status(400).json(response);
        }
    }
    getUsers(req, res) {
        try {
            const listOfUsers = (0, users_1.getUsers)();
            const response = {
                success: true,
                message: "The users were found out with success.",
                data: listOfUsers.map((user) => user.handleProperties()),
            };
            return res.status(200).json(response);
        }
        catch (error) {
            const response = {
                success: false,
                message: "The users weren't found out",
                data: null,
            };
            return res.status(400).json(response);
        }
    }
    getUserById(req, res) {
        try {
            const listOfUsers = (0, users_1.getUsers)();
            const { id } = req.params;
            const user = listOfUsers.find((user) => user.id === id);
            const response = {
                success: true,
                message: "The user was caught successfully.",
                data: user.handleProperties(),
            };
            return res.status(200).json(response);
        }
        catch (error) {
            const response = {
                success: false,
                message: "The user wasn't caught successfully.",
                data: null,
            };
            return res.status(400).json(response);
        }
    }
}
exports.UserController = UserController;
