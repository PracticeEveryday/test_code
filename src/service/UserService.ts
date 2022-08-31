export class UserService {
  constructor(private userRepositoryModel) {}

  public create = async (email: string, name: string) => {
    const newUser = this.userRepositoryModel.create(email, name);
    return newUser;
  };
}
