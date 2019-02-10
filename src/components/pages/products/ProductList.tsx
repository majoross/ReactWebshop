import * as React from "react";
import products, { Product } from "../../../utils/products";
import { ProductCard } from "./Product";
import "./ProductList.css";
interface IProps {
  selectedProduct: Product | null

}
export class ProductList extends React.Component<IProps, {}> {
  constructor(props:IProps){
    super(props)
    this.state={
      selectedProduct: props.selectedProduct,
      products: products
    }
  }
  render() {
    return (
      <div className="ProductList">
      <h1 className="title">Product List</h1>
        <div className="productContent">
        {products.product.map(p => (
          <ProductCard selectedProduct={this.props.selectedProduct} products={p} />
        ))}
        </div>
      </div>
    );
  }
}
