import * as React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./layout/errorPages/NotFound";
import { Footer } from "./layout/Footer/Footer";
import { Header } from "./layout/Header/Header";
import { ProductList } from "./pages/products/ProductList";
import "./Webshop.css";
interface IProps {}
export class Webshop extends React.Component<IProps, {}> {
  render() {
    return (
      <div className="Webshop">
        <Header />
        <div className="Content">
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/products" component={ProductList} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}
