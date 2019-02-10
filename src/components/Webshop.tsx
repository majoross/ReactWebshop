import * as React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./layout/errorPages/NotFound";
import { Footer } from "./layout/Footer/Footer";
import { Header } from "./layout/Header/Header";
import { ProductList } from "./pages/products/ProductList";
import "./Webshop.css";
import products from "../utils/products";
import { Home } from "./pages/Home";
interface IProps {}
const CategoryRoutes=(props: any) => {

}
export class Webshop extends React.Component<IProps, {}> {



  render() {
    return (
      <div className="Webshop">
        <Header />
        <div className="Content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={ProductList} />
            <Route path={products.product[0].category} component={ProductList} />
            <Route path={products.product[1].category} component={ProductList} />
            <Route path={products.product[2].category} component={ProductList} />
            <Route path={products.product[3].category} component={ProductList} />
            <Route path={products.product[4].category} component={ProductList} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}
