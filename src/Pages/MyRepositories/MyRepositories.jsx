import React, { useContext } from "react";
import UserContext from "../../Context/UserContext";
import style from "./MyRepositories.module.css";
import Navbar from "../../Components/NavBar/NavBar";

const MyRepositories = () => {
  const { state } = useContext(UserContext);
  const { repositories } = state;

  return (
    <>
      <Navbar />
      <div className={style.myRepositoriesContainer}>
        <h1 className={style.myRepositoriesContainer__title}>
          My repositories
        </h1>
      </div>
    </>
  );
};

export default MyRepositories;
