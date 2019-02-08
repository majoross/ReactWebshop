import * as React from "react";
import { Product } from "../../../utils/products";
import "./Product.css";

interface IProps {
  products: Product;
}
export class ProductCard extends React.Component<IProps> {
  render() {
    const { products } = this.props;
    return (
      <div className="Product">
      <div className="productCardContent">
      <img src={products.pictureUrl} className="productPicture"/>
      <div className="texts">
        <div className="name text">{products.name}</div>
        <div className="price text">${products.price}</div>
        <div className="description text">{products.description}</div>
        </div>
      </div>
      
        
      </div>
    );
  }
}
