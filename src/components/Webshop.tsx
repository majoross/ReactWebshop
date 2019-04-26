import * as React from "react";
import { Route, Switch } from "react-router-dom";
import products, { Product } from "../utils/products";
import NotFound from "./layout/errorPages/NotFound";
import { Footer } from "./layout/Footer/Footer";
import { Header } from "./layout/Header/Header";
import { Home } from "./pages/Home";
import { ProductDetails } from "./pages/products/ProductDetails";
import { ProductList } from "./pages/products/ProductList";
import "./Webshop.css";

const CategoryRoutes = (props: any) => {};
export class Webshop extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedProduct: {}
    };
  }

  chooseProduct = (product: Product) => {
    this.setState({ selectedProduct: product });
    console.log(this.state);
    alert(this.state.selectedProduct.name);
  };

  render() {
    return (
      <div className="Webshop">
        <Header />
        <div className="Content">
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/products" component={ProductList} /> */}
            <Route
              path={"/products"}
              component={() => (
                <ProductList
                  selectedProduct={this.state.selectedProduct!}
                  select={this.chooseProduct}
                />
              )}
            />
            <Route
              path={products.product[0].category}
              component={ProductList}
            />
            <Route
              path={products.product[1].category}
              component={ProductList}
            />
            <Route
              path={products.product[2].category}
              component={ProductList}
            />
            <Route
              path={products.product[3].category}
              component={ProductList}
            />
            <Route
              path={products.product[4].category}
              component={ProductList}
            />
            <Route
              path={"/productDetail"}
              component={() => (
                <ProductDetails selectedProduct={this.state.selectedProduct} />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}
