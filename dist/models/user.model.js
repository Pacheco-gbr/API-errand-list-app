"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const crypto_1 = require("crypto");
const errand_model_1 = require("./errand.model");
class User {
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get email() {
        return this._email;
    }
    get password() {
        return this._password;
    }
    get errands() {
        return this._errands;
    }
    constructor(param) {
        this._id = (0, crypto_1.randomUUID)();
        this._name = param.name;
        this._email = param.email;
        this._password = param.password;
        this._errands = [];
    }
    handleProperties() {
        return {
            id: this._id,
            name: this._name,
            email: this._email,
            password: this._password,
            errands: this._errands.map((errand) => errand.handleProperties())
        };
    }
    static createFromDataBaseUser(param) {
        const user = new User({
            name: param.name,
            email: param.email,
            password: param.password,
        });
        user._id = param.id;
        user._errands = param.errands.map((errand) => errand_model_1.Errand.createFromDataBaseErrand(errand));
        //user._errands = param.errands;
        return user;
    }
}
exports.User = User;
