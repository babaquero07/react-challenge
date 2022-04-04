import { useState } from "react";

const initialState = {
  repositories: [],
  favoritesRepositories: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToRepositories = (payload) => {
    setState({
      ...state,
      repositories: [...state.repositories, payload],
    });
  };

  const addToFavoriteRepositories = (payload) => {
    setState({
      ...state,
      favoritesRepositories: [...state.favoritesRepositories, payload],
    });
  };

  return {
    state,
    addToRepositories,
    addToFavoriteRepositories,
  };
};

export default useInitialState;
