import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Webshop } from "./components/Webshop";
ReactDOM.render(
  <BrowserRouter>
    <Webshop />
  </BrowserRouter>,
  document.getElementById("root")
);
