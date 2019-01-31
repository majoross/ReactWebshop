import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import routes from "./components/routes/routes";
import { Webshop } from "./components/Webshop";
ReactDOM.render(
  <BrowserRouter>
    <Webshop>
      <div>{routes}</div>
    </Webshop>
  </BrowserRouter>,
  document.getElementById("root")
);
