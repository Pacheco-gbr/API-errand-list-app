import { NextFunction, Request, Response } from "express";
import { getUsers } from "../../../database/users";
import { ResponseAPI } from "../../typeResponseAPI";

export const existErrandValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const listOfUsers = getUsers();
    const { id, idErrand } = req.params;

    const user = listOfUsers.find((user) => user.id === id)
    
    const errand = user?.errands.some((errand) => errand.id === idErrand)

    if(!errand){
     const response: ResponseAPI = {
       success: false,
       message: "Errand not found!",
       data: null,
     };

     return res.status(400).json(response);
    }


  return next();
};
