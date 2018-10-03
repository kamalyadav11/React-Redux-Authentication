import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import "./index.css";
import reducers from "./reducers";
import AppRouter from "./Router/AppRouter";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem("token") }
  },
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
