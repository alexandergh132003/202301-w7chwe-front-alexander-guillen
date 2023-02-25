import { createGlobalStyle } from "styled-components";
import "../node_modules/@fontsource/montserrat/400.css";

const GlobalStyles = createGlobalStyle`

*, ::after, ::before {
  box-sizing: border-box;
  font-family: "Montserrat";
}

body {
  padding: 1.5rem;
  background-color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  width: 100%;
  min-height: 100vh;
}

a {
  text-decoration: none;
  color: inherit;
}

h1,h2{
  padding: 0;
  margin: 0;
  font-size: 2rem;
}

ol, ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

button{
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;
}
`;
export default GlobalStyles;
