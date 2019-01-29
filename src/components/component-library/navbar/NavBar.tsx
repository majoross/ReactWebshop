import React from "react";
import "./NavBar.css";
import { NavButton } from "./NavButton";

interface Props {}

export const NavBar = ({  }: Props) => {
  return (
    <div className={"NavBar"}>
      <NavButton link={"/"} value={"Home"} />
      <NavButton link={"/"} value={"Categories"} />
      <NavButton link={"/"} value={"About"} />
      <NavButton link={"/"} value={"FAQ"} />
    </div>
  );
};
