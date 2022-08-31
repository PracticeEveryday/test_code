import {
  userObject,
  mockObjectId,
  mockEmail,
  mockName,
  TestUserModel,
} from "./mock/user";
import { UserService } from "../../src/service/UserService";

describe("User Service Test", () => {
  const userService = new UserService(TestUserModel);

  test("should return UserInfo.", async () => {
    expect(await userService.create(mockEmail, mockName)).toEqual(userObject);
  });
});
