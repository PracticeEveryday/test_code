import express, { Request, Response } from "express";

export class App {
  private app: express.Application;

  constructor() {
    this.app = express();
  }

  private setMiddlewares() {
    this.app.use(express.json());
    this.setRouters();
  }

  private setRouters() {
    this.app.get("/", (req, res) => {
      res.status(200).json({ status: "succ" });
    });
  }

  public init() {
    this.setMiddlewares();
    this.app.listen(3000, () => console.log("3000번 포트 온"));
  }
}
