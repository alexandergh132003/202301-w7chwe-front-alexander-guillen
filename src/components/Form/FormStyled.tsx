import styled from "styled-components";
import "../../../node_modules/@fontsource/montserrat/800.css";

const FormStyled = styled.form`
  margin: 0 auto;
  max-width: 300px;
  padding: 30px;
  border-radius: 16px;

  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 10px 15px -3px rgba(0, 0, 0, 0.1);

  .form-title {
    text-align: center;
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: 800;
  }

  .form-control {
    border-width: 2px;
  }
`;

export default FormStyled;
