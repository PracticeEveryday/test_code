import express, {
  Router,
  Request,
  Response,
  NextFunction,
  Application,
} from "express";

export class UserController {
  private userRouter: Router;
  private userService;
  constructor(userService) {
    this.userRouter = Router();
    this.userService = userService;
    this.routes();
  }

  public create = async (req: Request, res: Response, next: NextFunction) => {
    const { email, name } = req.body;
    const newUser = await this.userService.create(email, name);
    res.status(200).json(newUser);
  };

  public routes = () => {
    this.userRouter.post("/user", this.create);
  };
}
