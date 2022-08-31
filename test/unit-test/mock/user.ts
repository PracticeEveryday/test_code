import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { UserEntity } from "../../../src/db/entity/user.entity";
export const dayString = dayjs().toISOString();
export const mockObjectId = uuidv4();
export const mockEmail = faker.internet.email();
export const mockName = faker.name.fullName();

export const userObject = {
  uuid: mockObjectId,
  name: "kim",
  email: "test@test.com",
  create_dt: dayString,
  update_dt: dayString,
};

export const TestUserModel = {
  create: async (email: string, name: string) => {
    return userObject;
  },
};
