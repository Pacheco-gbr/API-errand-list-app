import express from "express";
import { routesApp } from "./config/routes";
import { ErrandController } from "./features/errands/controllers/errands.controllers";
import cors from "cors";

const allowedOrigins = ["*"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

const app = express();
app.use(express.json());
app.use(cors());

routesApp(app);

app.listen(3000, () => console.log("The API is running!"));

//console.log(Boolean(false))
