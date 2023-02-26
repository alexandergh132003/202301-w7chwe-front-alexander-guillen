import decodeToken from "jwt-decode";
import {
  loginUserActionCreator,
  logOutUserActionCreator,
} from "../../app/features/userSlice";
import { useAppDispatch } from "../../app/hooks";
import {
  TokenPayloadStructure,
  TokenResponse,
  User,
  UserCredentials,
} from "../../app/types";
import useToken from "../useToken/useToken";

interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
  logOutUser: () => void;
}

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();
  const { removeToken } = useToken();

  const loginUser = async (userCredentials: UserCredentials) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL!}/users/login`,
      {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: { "Content-Type": "application/json" },
      }
    );

    const { token } = (await response.json()) as TokenResponse;

    const { username, id } = decodeToken<TokenPayloadStructure>(token);

    const user: User = {
      username,
      id,
      token,
    };

    dispatch(loginUserActionCreator(user));
    localStorage.setItem("token", token);
  };

  const logOutUser = () => {
    removeToken();
    dispatch(logOutUserActionCreator());
  };

  return { loginUser, logOutUser };
};

export default useUser;
