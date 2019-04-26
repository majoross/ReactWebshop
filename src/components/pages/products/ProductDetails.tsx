import * as React from "react";
import { Product } from "../../../utils/products";
import "./Product.css";

interface IProps {
  selectedProduct: Product;
}
export class ProductDetails extends React.Component<IProps> {

  render() {
    const { selectedProduct } = this.props;
    return (
      <div className="ProductDetails">{selectedProduct.name}</div>
        
    );
  }
}
