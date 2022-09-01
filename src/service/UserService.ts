export class UserService {
  constructor(private userRepositoryModel) {}

  public create = async (email: string, name: string) => {
    const newUser = this.userRepositoryModel.create(email, name);
    return newUser;
  };

  public update = async (uuid: string, updateInfo) => {
    const updatedUser = this.userRepositoryModel.update(uuid, updateInfo);
    return updatedUser;
  };
}
