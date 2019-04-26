import * as React from "react";
import { Product } from "../../../utils/products";
import "./Product.css";
import { Link } from "react-router-dom";

interface IProps {
  product: Product;
  selectedProduct: Product | null;
  select: (product:Product)=>void;
}
export class ProductCard extends React.Component<IProps, {selectedProduct: Product}> {
constructor(props: IProps){
super(props)
this.state = {
  selectedProduct: props.selectedProduct
}
}

chooseProduct(product:Product){
  this.props.select(product);
  console.log(this.state)
}
  render() {
    const { product } = this.props;
    return (
      <Link className="productWrap"  to={"/productDetail"}>
      <div onClick={()=>this.chooseProduct(product)} className="Product">
      <div className="productCardContent">
      <img src={product.pictureUrl} className="productPicture"/>
      <div className="texts">
        <div className="name text">{product.name}</div>
        <div className="price text">${product.price}</div>
        <div className="description text">{product.description}</div>
        </div>
      </div>
      </div>
      </Link>
        
    );
  }
}
