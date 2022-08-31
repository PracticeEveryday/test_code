import { MyDataSource } from "../db/data-source";

import { Repository } from "typeorm";
import { UserEntity } from "../db/entity/user.entity";

export interface UserRepository extends Repository<UserEntity> {}

export class UserRepositoryModel {
  private userRepository;
  constructor() {
    this.userRepository = MyDataSource.getRepository("users");
  }
  public create = async (email: string, name: string) => {
    const newUser = await this.userRepository.save({ email, name });
    return newUser;
  };
}
