import React, { useContext } from "react";
import UserContext from "../../Context/UserContext";
import style from "../MyRepositories/MyRepositories.module.css";
import Navbar from "../../Components/NavBar/NavBar";
import RepositoryCard from "../../Components/RepositoryCard/RepositoryCard";

const MyFavorites = () => {
  const { state } = useContext(UserContext);
  const { favoritesRepositories } = state;

  return (
    <>
      <Navbar />
      <h1 className={style.myRepositoriesContainer__title}>
        My favorites repositories
      </h1>
      <main className={style.myRepositoriesContainer}>
        <div className={style.myRepositoriesContainer__content}>
          {favoritesRepositories &&
            favoritesRepositories.map((repo, ind) => (
              <RepositoryCard
                key={ind}
                repository={repo}
                indexValue={ind}
                isFavorite={true}
              />
            ))}
        </div>
      </main>
    </>
  );
};

export default MyFavorites;
