import * as React from "react";
import { Product } from "../../../utils/products";
import "./Product.css";

interface IProps {
  products: Product;
}
export class ProductDetails extends React.Component<IProps> {
  render() {
    const { products } = this.props;
    return (
      <div className="ProductDetails"></div>
        
    );
  }
}
