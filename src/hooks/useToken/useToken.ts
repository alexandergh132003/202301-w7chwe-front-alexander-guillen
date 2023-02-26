import jwt_decode from "jwt-decode";
import { useCallback } from "react";
import { loginUserActionCreator } from "../../app/features/userSlice";
import { useAppDispatch } from "../../app/hooks";
import { TokenPayloadStructure } from "../../app/types";

interface UseTokenStructure {
  getToken: () => void;
  removeToken: () => void;
}

const useToken = (): UseTokenStructure => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const { id, username } = jwt_decode<TokenPayloadStructure>(token);
      dispatch(loginUserActionCreator({ token, id, username }));
    }
  }, [dispatch]);

  const removeToken = () => {
    localStorage.removeItem("token");
  };

  return { getToken, removeToken };
};

export default useToken;
