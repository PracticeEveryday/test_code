import { UpdateResult } from "typeorm";

export interface IUser {
  uuid: string;
  email: string;
  name: string;
  create_dt: string;
  update_dt: string;
}

export interface IUserService {
  userRepositoryModel: IUserRepositoryModel;
  create(email: string, name: string): Promise<IUser>;
  update(uuid: string, updateInfo: Partial<IUser>): Promise<IUser>;
  getUser(uuid: string): Promise<IUser>;
}

export interface IUserRepositoryModel {
  create(email: string, name: string): Promise<IUser>;
  update(uuid: string, updateInfo: Partial<IUser>): Promise<UpdateResult>;
  getUser(uuid: string): Promise<IUser | null>;
}
