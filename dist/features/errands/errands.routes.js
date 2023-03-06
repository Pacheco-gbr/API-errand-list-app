"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errandRoutes = void 0;
const errands_controllers_1 = require("./controllers/errands.controllers");
const createErrandValidator_1 = require("./middlewares/createErrandValidator");
const existErrandValidator_1 = require("./middlewares/existErrandValidator");
const userID_validator_1 = require("../users/middlewares/userID.validator");
const errandRoutes = (router) => {
    router.post("/users/:id/errands", userID_validator_1.userIDValidator, createErrandValidator_1.createErrandValidator, new errands_controllers_1.ErrandController().createErrand);
    router.get("/users/:id/errands", userID_validator_1.userIDValidator, new errands_controllers_1.ErrandController().getErrands);
    router.get("/users/:id/errands/:idErrand", existErrandValidator_1.existErrandValidator, new errands_controllers_1.ErrandController().getErrandById);
    router.put("/users/:id/errands/:idErrand", existErrandValidator_1.existErrandValidator, new errands_controllers_1.ErrandController().updateErrand);
    router.delete("/users/:id/errands/:idErrand", 
    /*existErrandValidator,*/
    new errands_controllers_1.ErrandController().deleteErrand);
};
exports.errandRoutes = errandRoutes;
