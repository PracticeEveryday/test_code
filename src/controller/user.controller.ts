import { Router, Request, Response, NextFunction } from "express";

export class UserController {
  private userRouter: Router;
  private userService;
  constructor(userService) {
    this.userRouter = Router();
    this.userService = userService;
    this.routes();
  }

  private create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, name } = req.body;
      const newUser = await this.userService.create(email, name);
      res.status(200).json(newUser);
    } catch (error) {
      next(error);
    }
  };

  private routes = () => {
    this.userRouter.post("/user", this.create);
  };
}
