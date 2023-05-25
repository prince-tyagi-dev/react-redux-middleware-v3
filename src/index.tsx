import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import store from "./redux/store";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </Provider>,
  rootElement
);
