import { MyDataSource } from "../db/data-source";

import { Repository } from "typeorm";
import { UserEntity } from "../db/entity/user.entity";
import { IUserRepositoryModel } from "../types/interfaces/IUserService";
export interface UserRepository extends Repository<UserEntity> {}

export class UserRepositoryModel implements IUserRepositoryModel {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = MyDataSource.getRepository("users");
  }
  public create = async (email: string, name: string) => {
    const newUser = await this.userRepository.save({ email, name });
    return newUser;
  };

  public update = async (uuid: string, updateInfo) => {
    const updateUser = await this.userRepository
      .createQueryBuilder()
      .update()
      .set(updateInfo)
      .where("uuid = :uuid", { uuid })
      .execute();
    return updateUser;
  };
}
