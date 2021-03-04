import React from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/globals";
import { theme } from "./styles/theme";
import App from "./App";

ReactDom.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
