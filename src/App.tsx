import * as React from "react";
import * as ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { Webshop } from "./components/Webshop";
ReactDOM.render(
  <MemoryRouter>
    <Webshop />
  </MemoryRouter>,
  document.getElementById("root")
);
