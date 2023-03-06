import express, { Application, Request, Response } from "express";
import { errandRoutes } from "../features/errands/errands.routes";
import { userRoutes } from "../features/users/users.routes";
import { initialPage } from "./initialPage";

const routesApp = (app: Application) => {
    const router = express.Router();

    app.use('/', router);
    router.get('/', (request: Request, response: Response) => response.send(initialPage));

    userRoutes(router);
    errandRoutes(router);
}

export { routesApp }