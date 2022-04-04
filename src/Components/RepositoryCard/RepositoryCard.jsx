import React, { useContext } from "react";
import UserContext from "../../Context/UserContext";
import style from "./RepositoryCard.module.css";

const RepositoryCard = ({ repository }) => {
  const { name, description, language, repoURL } = repository;
  const { addToFavoriteRepositories } = useContext(UserContext);

  const handleClick = (repository) => {
    addToFavoriteRepositories(repository);
  };
  return (
    <div className={style.cardContainer}>
      <h2>{name}</h2>
      <p>Description: {description}</p>

      <span>Keyword: {language}</span>
      <a href={repoURL} target="_blank">
        Github
      </a>
      <button onClick={() => handleClick(repository)}>Add to favorites</button>
    </div>
  );
};

export default RepositoryCard;
