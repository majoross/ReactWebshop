import React from "react";
import { Link } from "react-router-dom";
import "./NavButton.css";

interface Props {
  link: string;
  value: string;
}

export const NavButton = ({ link, value }: Props) => {
  return (
    <div className={"NavButton"}>
      <Link className={"button"} to={link}>
        {value}
      </Link>
    </div>
  );
};
