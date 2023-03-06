import { NextFunction, Request, Response } from "express";
import { getUsers } from "../../../database/users";
import { ResponseAPI } from "../../typeResponseAPI";

const emailUserValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const listOfUsers = getUsers();

    const { email } = req.body;

    const exist = listOfUsers.some((user) => user.email === email);

    if (exist) {
      const response: ResponseAPI = {
        success: false,
        message: "This email has already been registered.",
        data: null,
      };
      return res.status(400).json(response);
    }

    return next();
    
  } catch (error) {
    const response: ResponseAPI = {
      success: false,
      message: "Error.",
      data: null,
    };

    return res.status(400).json(response);
  }
};

export { emailUserValidator }
