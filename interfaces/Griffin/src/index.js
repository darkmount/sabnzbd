import "core-js/es";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { App } from "./components/App";
import reduxStore from "./store/reduxStore";

const renderApp = AppComponent => {
  const root = document.getElementById("root");

  if (root) {
    ReactDOM.render(
      <Provider store={reduxStore}>
        <AppComponent />
      </Provider>,
      root
    );
  }
};

renderApp(App);
