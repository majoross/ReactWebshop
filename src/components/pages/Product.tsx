import * as React from "react";
import { Product } from "../../utils/products";
import "./ProductList.css";

interface IProps {
  products: Product;
}
export class ProductCard extends React.Component<IProps> {
  render() {
    const { products } = this.props;
    return (
      <div className="Product">
        <div className="Name">{products.name}</div>
        <div className="Name">{products.price}</div>
        <div className="Name">{products.description}</div>
      </div>
    );
  }
}
