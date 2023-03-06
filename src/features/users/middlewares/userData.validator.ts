import { NextFunction, Request, Response } from "express";
import { ResponseAPI } from "../../typeResponseAPI";

export const userDataValidator = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      const response: ResponseAPI = {
        success: false,
        message: "You must sent all the parameters.",
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
