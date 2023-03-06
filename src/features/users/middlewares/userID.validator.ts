import { NextFunction, Request, Response } from "express";
import { getUsers } from "../../../database/users";
import { ResponseAPI } from "../../typeResponseAPI";

export const userIDValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const listOfUsers = getUsers();
    const { id } = req.params;

    const exist = listOfUsers.some((user) => user.id === id);

    if(!exist){
        const response: ResponseAPI = {
            success: false,
            message: "This id didn't match with any user.",
            data: null,
        }
        return res.status(400).json(response);
    }

    return next();
};
