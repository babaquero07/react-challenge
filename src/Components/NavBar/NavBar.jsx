import React from "react";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={style.navBar}>
      <li>
        <Link className={style.navBar__link} to={"/userView"}>
          {" "}
          Home
        </Link>
      </li>
      <li>
        <Link className={style.navBar__link} to={"/userView/my-repositories"}>
          {" "}
          My repositories
        </Link>
      </li>
      <li>
        <Link className={style.navBar__link} to={"/userView/my-favorites"}>
          {" "}
          My favorites repositories
        </Link>
      </li>
    </nav>
  );
};
export default Navbar;
