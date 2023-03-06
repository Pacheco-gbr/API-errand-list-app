import { Request, Response } from "express";
import { getUsers, saveUsers } from "../../../database/users";
import { Errand, User } from "../../../models";
import { ResponseAPI } from "../../typeResponseAPI";

class ErrandController {
  createErrand(req: Request, res: Response) {
    try {
      const listOfUsers = getUsers();
      const { id } = req.params;
      const { description, detail } = req.body;

      const index = listOfUsers.findIndex((user) => user.id === id);

      const newErrand = new Errand({
        description,
        detail,
      });

      listOfUsers[index].errands.push(newErrand);

      saveUsers(listOfUsers);

      const response: ResponseAPI = {
        success: true,
        message: "You have created an errand.",
        data: newErrand.handleProperties(),
      };

      return res.status(200).json(response);
    } catch (error) {
      const response: ResponseAPI = {
        success: false,
        message: "The process to create an errand didn't go well.",
        data: null,
      };
      return res.status(400).json(response);
    }
  }
  getErrands(req: Request, res: Response) {
    try {
      const listOfUsers = getUsers();
      const { id } = req.params;
      const { description, filed } = req.query;

      const user = listOfUsers.find((user) => user.id === id) as User;

      const errands = user.errands.filter((errand) => {
        if (description && filed) {
          return (
            errand._description
              .toLowerCase()
              .includes((description as string).toLowerCase()) &&
            errand._filed === Boolean(filed === 'true' ? true : false)
          );
        }
        return errand
      });

      const response: ResponseAPI = {
        success: true,
        message: `Errands from ${user.name} searched with success`,
        data: errands.map((errand) => errand.handleProperties())
      };

      return res.status(200).json(response);

    } catch (error) {
      const response: ResponseAPI = {
        success: false,
        message: `The searched failed.`,
        data: null,
      };
      return res.status(400).json(response);
    }
  }
  getErrandById(req: Request, res: Response) {
    try {
      const listOfUsers = getUsers();
      const { id, idErrand } = req.params;

      const user = listOfUsers.find((user) => user.id === id) as User;

      const errand = user.errands.find(
        (errand) => errand.id === idErrand
      ) as Errand;

      const response: ResponseAPI = {
        success: true,
        message: "This errand will be shown below.",
        data: errand.handleProperties(),
      };

      return res.status(200).json(response);
    } catch (error) {
      const response: ResponseAPI = {
        success: false,
        message: "The search failed.",
        data: null,
      };

      return res.status(400).json(response);
    }
  }
  updateErrand(req: Request, res: Response) {
    try {
      const listOfUsers = getUsers();
      const { id, idErrand } = req.params;
      const { description, detail, filed } = req.body;

      const indexUser = listOfUsers.findIndex((user) => user.id === id);
      const indexErrand = listOfUsers[indexUser].errands.findIndex(
        (errand) => errand.id === idErrand
      );

      const oldErrand = listOfUsers[indexUser].errands[indexErrand];

      listOfUsers[indexUser].errands[indexErrand]._description =
        description ?? oldErrand._description;
      listOfUsers[indexUser].errands[indexErrand]._detail =
        detail ?? oldErrand._detail;
      listOfUsers[indexUser].errands[indexErrand]._filed =
        filed ?? oldErrand._filed;

      saveUsers(listOfUsers);

      const response: ResponseAPI = {
        success: true,
        message: "The errand was updated successfully",
        data: listOfUsers[indexUser].errands[indexErrand].handleProperties(),
      };

      return res.status(200).json(response);
    } catch (error) {
      const response: ResponseAPI = {
        success: false,
        message: "The errand wasn't updated",
        data: null,
      };

      return res.status(500).json(response);
    }
  }
  deleteErrand(req: Request, res: Response) {
    try {
      const listUser = getUsers();
      const { id, idErrand } = req.params;

      const indexUser = listUser.findIndex((user) => user.id === id);

      const indexErrand = listUser[indexUser].errands.findIndex(
        (errand) => errand.id === idErrand
      );

      const [errandDeleted] = listUser[indexUser].errands.splice(
        indexErrand,
        1
      );

      saveUsers(listUser);

      const response: ResponseAPI = {
        success: true,
        message: "Errand deleted!",
        data: errandDeleted.handleProperties(),
      };

      return res.status(200).json(response);
    } catch (error: any) {
      const response: ResponseAPI = {
        success: false,
        message: error.message,
        data: null,
      };

      return res.status(400).json(response);
    }
  }
}

export { ErrandController };
