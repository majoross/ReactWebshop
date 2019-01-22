import * as React from "react";
import { Header } from "./layout/Header";
interface IProps {
  text: string;
}
export class Webshop extends React.Component<IProps, {}> {
  render() {
    return (
      <div>
        <Header />
        {this.props.text}
      </div>
    );
  }
}
