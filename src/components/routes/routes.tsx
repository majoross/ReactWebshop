import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../layout/errorPages/NotFound";
import { ProductList } from "../pages/products/ProductList";

export default (
  <Switch>
    <Route exact path="/" component={ProductList} />
    <Route path="/products" component={ProductList} />
    <Route path="/mobiles" component={ProductList} />
    <Route component={NotFound} />
  </Switch>
);
