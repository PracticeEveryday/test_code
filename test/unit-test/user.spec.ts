import {
  userObject,
  mockObjectId,
  mockEmail,
  mockName,
  TestUserModel,
  updateUser,
} from "./mock/user";
import { UserService } from "../../src/service/UserService";

describe("User Service Test", () => {
  const userService = new UserService(TestUserModel);

  test("should return UserInfo.", async () => {
    expect(await userService.create(mockEmail, mockName)).toEqual(userObject);
  });

  test("should return UpdateUserInfo", async () => {
    expect(await userService.update(mockObjectId, updateUser)).toEqual(
      updateUser
    );
  });

  test("should return UserInfo", async () => {
    expect(await userService.getUser(mockObjectId)).toEqual(userObject);
  });

  test("should return all", async () => {
    expect(await userService.getAll()).toEqual([userObject]);
  });
});
