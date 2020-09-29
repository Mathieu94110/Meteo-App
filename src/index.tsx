import App from "./App";
import store from "./store/reducers";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
