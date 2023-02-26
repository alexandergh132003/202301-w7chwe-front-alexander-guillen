import { useState } from "react";
import useUser from "../../hooks/useUser/useUser";

import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useUser();

  const handleLoginClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    debugger;
    loginUser({ username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <FormStyled>
      <h2 className="form-title">Social Network</h2>
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form1Example1">
          Username
        </label>
        <input
          type="email"
          id="form1Example1"
          className="form-control"
          placeholder="username"
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="form1Example2">
          Password
        </label>
        <input
          type="password"
          id="form1Example2"
          className="form-control"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </div>
      </div>
    </FormStyled>
  );
};

export default Form;
