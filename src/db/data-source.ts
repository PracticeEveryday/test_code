import "reflect-metadata";
import { DataSource } from "typeorm";

import { UserEntity } from "./entity/user.entity";

import config from "../config";

export const MyDataSource = new DataSource({
  type: "postgres",
  url: config.DB_URL,
  synchronize: true,
  logging: false,
  entities: [UserEntity],
  migrations: [],
  subscribers: [],
});
