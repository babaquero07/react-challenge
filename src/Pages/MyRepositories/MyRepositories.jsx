import React, { useContext } from "react";
import UserContext from "../../Context/UserContext";
import style from "./MyRepositories.module.css";
import Navbar from "../../Components/NavBar/NavBar";
import RepositoryCard from "../../Components/RepositoryCard/RepositoryCard";

const MyRepositories = () => {
  const { state } = useContext(UserContext);
  const { repositories } = state;
  return (
    <>
      <Navbar />
      <main className={style.myRepositoriesContainer}>
        <h1 className={style.myRepositoriesContainer__title}>
          My repositories
        </h1>
        <div className={style.myRepositoriesContainer__content}>
          {repositories[0] &&
            repositories[0].map((repo, ind) => (
              <RepositoryCard key={ind} repository={repo} />
            ))}
        </div>
      </main>
    </>
  );
};

export default MyRepositories;
