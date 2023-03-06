import { randomUUID } from "crypto";
import { Errand } from "./errand.model";

export interface UserCreatedDTO {
  name: string;
  email: string;
  password: string;
}

export interface CreateDatabaseDTO {
  id: string;
  name: string;
  email: string;
  password: string;
  errands: Array<Errand>;
}

export class User {
  private _id: string;
  private _name: string;
  private _email: string;
  private _password: string;
  private _errands: Array<Errand>;

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }
  get email() {
    return this._email;
  }
  get password() {
    return this._password;
  }
  get errands() {
    return this._errands;
  }

  constructor(param: UserCreatedDTO) {
    this._id = randomUUID();
    this._name = param.name;
    this._email = param.email;
    this._password = param.password;
    this._errands = [];
  }

  handleProperties() {
    return {
      id: this._id,
      name: this._name,
      email: this._email,
      password: this._password,
      errands: this._errands.map((errand) => errand.handleProperties())
    };
  }



  static createFromDataBaseUser(param: CreateDatabaseDTO) {
    const user = new User({
      name: param.name,
      email: param.email,
      password: param.password,
    });
    user._id = param.id;
    user._errands = param.errands.map((errand) => Errand.createFromDataBaseErrand(errand))
    //user._errands = param.errands;
    return user;
  }
}
