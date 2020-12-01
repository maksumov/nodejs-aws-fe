import CssBaseline from "@material-ui/core/CssBaseline";
import axios from "axios";
import App from "components/App/App";
import "index.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "store/store";
import * as serviceWorker from "./serviceWorker";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    switch (error.response.status) {
      case 400:
        alert(error.response.data?.data);
        break;
      case 401:
      case 403:
        alert(error.response.data?.message);
    }

    return Promise.reject(error.response);
  }
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
