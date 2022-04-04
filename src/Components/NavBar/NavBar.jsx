import React from "react";
import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={style.navBar}>
      <li>
        <Link className={style.navBar__link} to={"/userView/myRepositories"}>
          {" "}
          My repositories
        </Link>
      </li>
      <li>
        <Link className={style.navBar__link} to={"/userView/myfavorites"}>
          {" "}
          My favorites repositories
        </Link>
      </li>
    </nav>
  );
};
export default Navbar;
