import { renderHook } from "@testing-library/react";
import { TokenPayloadStructure, UserCredentials } from "../../app/types";
import { fakeToken, testStore } from "../../mocks/data";
import FakeWrapper from "../../mocks/FakeWrapper";
import { server } from "../../mocks/server";
import useUser from "./useUser";
import jwt_decode from "jwt-decode";

export const tokenPayload: TokenPayloadStructure = {
  username: "Alexander",
  id: "12312312312",
};

jest.mock("jwt-decode", () => jest.fn());

beforeAll(() => server.listen());
afterEach(() => {
  jest.clearAllMocks();
  server.resetHandlers();
  testStore.clearActions();
});
afterAll(() => server.close());

describe("Given a useUser hook", () => {
  const {
    result: {
      current: { loginUser, logOutUser },
    },
  } = renderHook(() => useUser(), {
    wrapper({ children }) {
      return <FakeWrapper>{children}</FakeWrapper>;
    },
  });

  describe("When we call its inner loginUser function", () => {
    test("Then dispatch should be called with loginUserActionCreator", async () => {
      const userCredentials: UserCredentials = {
        username: "Alexander",
        password: "usuario1",
      };
      const expectedActions = [
        {
          type: "user/loginUser",
          payload: {
            ...tokenPayload,
            token: fakeToken,
          },
        },
      ];

      (jwt_decode as jest.MockedFunction<typeof jwt_decode>).mockReturnValue(
        tokenPayload
      );

      await loginUser(userCredentials);

      expect(testStore.getActions()).toStrictEqual(expectedActions);
    });
  });

  describe("When we call its inner logOutUser function", () => {
    test("Then dispatch should be called with logOutUserActionCreator", () => {
      const expectedActions = [{ type: "user/logOutUser", payload: undefined }];

      logOutUser();

      expect(testStore.getActions()).toStrictEqual(expectedActions);
    });
  });
});
