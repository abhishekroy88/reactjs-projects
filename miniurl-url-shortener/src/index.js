import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./redux/store";

import App from "./App";

const rootElement = document.getElementById("root");
const store = createStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
