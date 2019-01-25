import * as React from "react";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import "./Webshop.css";
interface IProps {
  text: string;
}
export class Webshop extends React.Component<IProps, {}> {
  render() {
    return (
      <div className="Webshop">
        <Header />
        <div className="Content">{this.props.text}</div>

        <Footer />
      </div>
    );
  }
}
