import React from "react";
import "./NavBar.css";
import { NavButton } from "./NavButton";

interface Props {}

export const NavBar = ({  }: Props) => {
  return (
    <div className={"NavBar"}>
      <NavButton link={"/"} value={"Home"} />
      <NavButton link={"/products"} value={"Products"} />
      <NavButton link={"/mobiles"} value={"About"} />
      <NavButton link={"/puki"} value={"FAQ"} />
    </div>
  );
};
