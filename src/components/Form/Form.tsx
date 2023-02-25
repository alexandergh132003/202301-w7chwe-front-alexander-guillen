import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
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
        />
      </div>
      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        </div>
      </div>
    </FormStyled>
  );
};

export default Form;
