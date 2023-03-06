import { Router } from "express";
import { ErrandController } from "./controllers/errands.controllers";
import { createErrandValidator } from "./middlewares/createErrandValidator";
import { existErrandValidator } from "./middlewares/existErrandValidator";
import { userIDValidator } from "../users/middlewares/userID.validator";

const errandRoutes = (router: Router) => {
  router.post(
    "/users/:id/errands",
    userIDValidator,
    createErrandValidator,
    new ErrandController().createErrand
  );
  router.get(
    "/users/:id/errands",
    userIDValidator,
    new ErrandController().getErrands
  );
  router.get(
    "/users/:id/errands/:idErrand",
    existErrandValidator,
    new ErrandController().getErrandById
  );
  router.put(
    "/users/:id/errands/:idErrand",
    existErrandValidator,
    new ErrandController().updateErrand
  );
  router.delete(
    "/users/:id/errands/:idErrand",
    /*existErrandValidator,*/
    new ErrandController().deleteErrand
  );
};


export { errandRoutes };
