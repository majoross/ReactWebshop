import * as React from "react";
import products, { Product } from "../../../utils/products";
import { ProductCard } from "./Product";
import "./ProductList.css";
interface IProps {
  selectedProduct?: Product | null,
  select: (product:Product)=>void

}
export class ProductList extends React.Component<IProps, {selectedProduct: Product}> {
  constructor(props:IProps){
    super(props)
    this.state={
      selectedProduct: props.selectedProduct
    }
  }
  
  render() {
    return (
      <div className="ProductList">
      <h1 className="title">Product List</h1>
        <div className="productContent">
        {products.product.map(p => (
          <ProductCard selectedProduct={this.props.selectedProduct} select={this.props.select} product={p} />
        ))}
        </div>
      </div>
    );
  }
}
