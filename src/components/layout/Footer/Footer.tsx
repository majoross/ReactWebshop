import * as React from "react";
import "./Footer.css";

interface IProps {}
export class Footer extends React.Component<IProps, {}> {
  render() {
    return <div className="Footer">
    <div className="footerContent">
    <div className="text">
    Footer, elég fasza!
    </div>
    </div>
    </div>;
  }
}
