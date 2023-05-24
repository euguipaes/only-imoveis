import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: 'poppins', sans-serif;
}

body {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #f0f2f5;
}
`;

export default GlobalStyle;
