import React, { useContext } from "react";
import UserContext from "../../Context/UserContext";
import Swal from "sweetalert2";
import style from "./RepositoryCard.module.css";

const RepositoryCard = ({ repository, isFavorite, indexValue }) => {
  const { name, description, language, repoURL } = repository;
  const { addToFavoriteRepositories, removeFromFavorites } =
    useContext(UserContext);

  const handleClick = (repository) => {
    addToFavoriteRepositories(repository);

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    Toast.fire({
      icon: "success",
      title: "Repository added to favorites",
    });
  };

  return (
    <div className={style.cardContainer}>
      <h2>{name}</h2>
      <p>Description: {description}</p>
      <span>Keyword: {language}</span>
      <a href={repoURL} target="_blank">
        Github
      </a>
      {!isFavorite ? (
        <button onClick={() => handleClick(repository)}>
          Add to favorites
        </button>
      ) : (
        <button onClick={() => removeFromFavorites(indexValue)}>
          Remove from favorites
        </button>
      )}
    </div>
  );
};

export default RepositoryCard;
