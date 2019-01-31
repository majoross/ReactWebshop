import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../layout/errorPages/NotFound";
import { ProductList } from "../pages/ProductList";

export default (
  <Switch>
    <Route path="/products" component={ProductList} />
    <Route component={NotFound} />
  </Switch>
);
