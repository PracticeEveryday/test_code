import { IUserService } from "../types/interfaces/IUserService";

export class UserService implements IUserService {
  userRepositoryModel;
  constructor(userRepositoryModel) {
    this.userRepositoryModel = userRepositoryModel;
  }

  public create = async (email, name) => {
    const newUser = this.userRepositoryModel.create(email, name);
    return newUser;
  };

  public update = async (uuid, updateInfo) => {
    const updatedUser = this.userRepositoryModel.update(uuid, updateInfo);
    return updatedUser;
  };

  public getUser = async (uuid) => {
    const foundUser = this.userRepositoryModel.getUser(uuid);
    return foundUser;
  };

  public getAll = async () => {
    const foundUsers = this.userRepositoryModel.getAll();
    return foundUsers;
  };
}
