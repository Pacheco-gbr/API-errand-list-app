import { Request, Response } from "express";
import { getUsers, saveUsers } from "../../../database/users";
import { User } from "../../../models";
import { ResponseAPI } from "../../typeResponseAPI";

class UserController {
  createUser(req: Request, res: Response) {
    try {
      const listOfUsers = getUsers();

      const { name, email, password } = req.body;

      const newUser = new User({ name, email, password });

      listOfUsers.push(newUser);

      saveUsers(listOfUsers);

      const response: ResponseAPI = {
        success: true,
        message: "User created.",
        data: newUser.handleProperties(),
      };

      return res.status(200).json(response);
    } catch (error) {
      const response: ResponseAPI = {
        success: false,
        message: "User not created.",
        data: null,
      };

      return res.status(400).json(response);
    }
  }
  getUsers(req: Request, res: Response) {
    try {
      const listOfUsers = getUsers();

      const response: ResponseAPI = {
        success: true,
        message: "The users were found out with success.",
        data: listOfUsers.map((user) => user.handleProperties()),
      };

      return res.status(200).json(response);
    } catch (error) {
      const response: ResponseAPI = {
        success: false,
        message: "The users weren't found out",
        data: null,
      };

      return res.status(400).json(response);
    }
  }
  getUserById(req: Request, res: Response) {
    try {
      const listOfUsers = getUsers();

      const { id } = req.params;

      const user = listOfUsers.find((user) => user.id === id) as User;

      const response: ResponseAPI = {
        success: true,
        message: "The user was caught successfully.",
        data: user.handleProperties(),
      };
      return res.status(200).json(response);
    } catch (error) {
      const response: ResponseAPI = {
        success: false,
        message: "The user wasn't caught successfully.",
        data: null,
      };
      return res.status(400).json(response);
    }
  }
}

export { UserController };
