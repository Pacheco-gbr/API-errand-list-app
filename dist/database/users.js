"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveUsers = exports.getUsers = exports.listOfUsers = void 0;
const models_1 = require("../models");
const fs_1 = __importDefault(require("fs"));
exports.listOfUsers = [];
const directory = `db.json`;
function getUsers() {
    const list = fs_1.default.readFileSync(directory);
    const listJSON = JSON.parse(list.toString());
    return listJSON.map((user) => models_1.User.createFromDataBaseUser(user));
}
exports.getUsers = getUsers;
function saveUsers(list) {
    fs_1.default.writeFileSync(directory, JSON.stringify(list.map((user) => user.handleProperties())));
}
exports.saveUsers = saveUsers;
/*saveUsers([
  new User({
    name: "Gabriel",
    email: "gabriel@hotmail.com",
    password: "12345678",
  }),
]);

/*const list = getUsers();


console.log(list.map(user => user.handleProperties()))*/
