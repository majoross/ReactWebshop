import * as React from "react";
import { NavBar } from "../../component-library/navbar/NavBar";
import "./Header.css";

interface IProps {}
export class Header extends React.Component<IProps, {}> {
  render() {
    return (
      <div className="Header">
        <NavBar />
      </div>
    );
  }
}
