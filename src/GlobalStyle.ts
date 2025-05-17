import { createGlobalStyle } from "styled-components";
import { themeApp } from "./style-config";

export const GlobalStyle = createGlobalStyle`


@font-face {
  font-family: "RubikVinyl";
  src: url("../src/assets/fonts/RubikVinyl-Regular.ttf");
 
}




 #root {
  max-width: 1120px;
  min-height: 100%;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
button{
  border: none;
  background-color: transparent;
}

  html {
    height: 100%;
  }

  body {
  font-family: cursive;
-webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    background: linear-gradient(to bottom,${themeApp.colors.background_color_second},rgb(19, 1, 85));
     }
`;
