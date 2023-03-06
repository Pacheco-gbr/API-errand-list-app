"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Errand = void 0;
const crypto_1 = require("crypto");
class Errand {
    constructor(params) {
        this._id = (0, crypto_1.randomUUID)();
        this._description = params.description;
        this._detail = params.detail;
        this._filed = false;
    }
    get id() {
        return this._id;
    }
    get description() {
        return this._description;
    }
    get detail() {
        return this._detail;
    }
    get filed() {
        return this._filed;
    }
    handleProperties() {
        return {
            id: this._id,
            description: this._description,
            detail: this._detail,
            filed: this._filed,
        };
    }
    static createFromDataBaseErrand(params) {
        const errand = new Errand({
            description: params.description,
            detail: params.detail,
        });
        errand._id = params.id;
        errand._filed = params.filed;
        return errand;
    }
}
exports.Errand = Errand;
