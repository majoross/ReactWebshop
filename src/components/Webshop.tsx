import * as React from "react";
import { Footer } from "./layout/Footer/Footer";
import { Header } from "./layout/Header/Header";
import "./Webshop.css";
interface IProps {}
export class Webshop extends React.Component<IProps, {}> {
  render() {
    return (
      <div className="Webshop">
        <Header />
        <div className="Content" />

        <Footer />
      </div>
    );
  }
}
