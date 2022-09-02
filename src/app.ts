import express, { Request, Response } from "express";

import { MyDataSource } from "./db/data-source";

import { UserController } from "./controller/user.controller";
import { UserRepositoryModel } from "./repository/user.repository";
import { UserService } from "./service/UserService";

export class App {
  private app: express.Application;
  private userController;
  constructor() {
    this.app = express();
    this.userController = new UserController(
      new UserService(new UserRepositoryModel())
    );
  }

  private setMiddlewares() {
    this.app.use(express.json());
    this.setRouters();
  }

  private setRouters() {
    this.app.get("/", (req, res) => {
      res.status(200).json({ status: "succ" });
    });
    this.app.use("/", this.userController.userRouter);
  }

  public init() {
    this.setMiddlewares();
    this.app.listen(3000, () => {
      MyDataSource.initialize()
        .then(async () => {
          console.log("prostgreSQL DB connection success");
          console.log("3000번 포트 온");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
}
