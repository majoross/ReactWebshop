import * as React from "react";
import "./Header.css";

interface IProps {}
export class Header extends React.Component<IProps, {}> {
  render() {
    return (
      <div className="Header">
        <h1>Header, elég fasza!</h1>
      </div>
    );
  }
}
