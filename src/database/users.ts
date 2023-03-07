import { User } from "../models";
import fs from "fs";

export const listOfUsers: Array<User> = [];

const directory = `db.json`;

export function getUsers(): Array<User> {
  const list = fs.readFileSync(directory);
  const listJSON = JSON.parse(list.toString()) as Array<User>;
  return listJSON.map((user) => User.createFromDataBaseUser(user));
}

export function saveUsers(list: Array<User>) {
  fs.writeFileSync(
    directory,
    JSON.stringify(list.map((user) => user.handleProperties()))
  );
}


/*saveUsers([
  new User({
    name: "Gabriel",
    email: "gabriel@hotmail.com",
    password: "12345678",
  }),
]);

/*const list = getUsers();


console.log(list.map(user => user.handleProperties()))*/
