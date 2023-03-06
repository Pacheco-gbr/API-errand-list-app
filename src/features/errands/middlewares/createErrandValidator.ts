import { NextFunction, Request, Response } from "express";
import { ResponseAPI } from "../../typeResponseAPI";

export const createErrandValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { description, detail } = req.body;

  if (!description || !detail) {
    const response: ResponseAPI = {
      success: false,
      message: "All parameters must be sent.",
      data: null,
    };
    return res.status(400).json(response);
  }
  return next()
};
