import React, { useContext } from "react";
import Navbar from "../../Components/NavBar/NavBar";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import style from "./UserView.module.css";

const axios = require("axios");

const UserView = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const { addToRepositories } = useContext(UserContext);
  const repos = [];

  const handleClick = () => {
    const { gitHubUserName } = user;

    axios
      .get(`http://api.github.com/users/${gitHubUserName}/repos`)
      .then(({ data }) => {
        data.forEach(({ name, description, language, html_url }) => {
          repos.push({ name, description, language, repoURL: html_url });
        });

        addToRepositories(repos);

        Swal.fire({
          icon: "success",
          title: "Successful request. Redirecting to your repositories...",
        });

        setTimeout(() => {
          navigate("/userView/my-repositories");
        }, 3000);
      });
  };

  return (
    <>
      <Navbar />
      <div className={style.userViewContainer}>
        <h1 className={style.userView__title}>
          Click to get all your repositories
        </h1>
        <button className={style.userView__button} onClick={handleClick}>
          GET ALL
        </button>
      </div>
    </>
  );
};

export default UserView;
