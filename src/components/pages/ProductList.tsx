import * as React from "react";
import products from "../../utils/products";
import { ProductCard } from "./Product";
import "./ProductList.css";
interface IProps {}
export class ProductList extends React.Component<IProps, {}> {
  render() {
    return (
      <div className="ProductList">
        <div className="Content">ProductList</div>
        {products.product.map(p => (
          <ProductCard products={p} />
        ))}
      </div>
    );
  }
}
