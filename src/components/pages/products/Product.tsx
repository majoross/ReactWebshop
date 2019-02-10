import * as React from "react";
import { Product } from "../../../utils/products";
import "./Product.css";
import { Link } from "react-router-dom";

interface IProps {
  products: Product;
  selectedProduct: Product | null;
}
export class ProductCard extends React.Component<IProps> {
constructor(props: IProps){
super(props)
this.state = {
  selectedProduct: props.selectedProduct
}
}

chooseProduct(product:Product){
  this.setState({selectedProduct: product});
  console.log(this.state)
}
  render() {
    const { products } = this.props;
    return (
      <Link className="productWrap"  to={products.category}>
      <div onClick={()=>this.chooseProduct(products)} className="Product">
      <div className="productCardContent">
      <img src={products.pictureUrl} className="productPicture"/>
      <div className="texts">
        <div className="name text">{products.name}</div>
        <div className="price text">${products.price}</div>
        <div className="description text">{products.description}</div>
        </div>
      </div>
      </div>
      </Link>
        
    );
  }
}
