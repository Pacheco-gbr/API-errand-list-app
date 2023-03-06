import { Router } from "express";
import { UserController } from "./controllers/users.controllers";
import { emailUserValidator } from "./middlewares/emailUser.validator";
import { userDataValidator } from "./middlewares/userData.validator";
import { userIDValidator } from "./middlewares/userID.validator";

const userRoutes = (router: Router) => {
  router.post("/users", emailUserValidator, userDataValidator, new UserController().createUser);
  router.get("/users", new UserController().getUsers);
  router.get("/users/:id", userIDValidator, new UserController().getUserById);
};

export { userRoutes };
