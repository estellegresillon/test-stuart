import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/globals";
import { theme } from "./styles/theme";
import configureStore from "store";
import App from "./components/App";

ReactDom.render(
  <Provider store={configureStore()}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
