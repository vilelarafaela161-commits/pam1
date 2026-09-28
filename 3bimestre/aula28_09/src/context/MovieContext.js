import React, { createContext, useContext, useState } from "react";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [setlist, setSetlist] = useState([]);

  function toggleFavorite(movie) {
    setFavorites((current) => {
      const exists = current.some(
        (item) => item.id === movie.id
      );

      if (exists) {
        return current.filter(
          (item) => item.id !== movie.id
        );
      }

      return [...current, movie];
    });
  }

  function isFavorite(movieId) {
    return favorites.some(
      (item) => item.id === movieId
    );
  }

  function addToSetlist(movie) {
    setSetlist((current) => {
      const exists = current.some(
        (item) => item.id === movie.id
      );

      if (exists) {
        return current;
      }

      return [...current, movie];
    });
  }

  function removeFromSetlist(movieId) {
    setSetlist((current) =>
      current.filter(
        (item) => item.id !== movieId
      )
    );
  }

  function isInSetlist(movieId) {
    return setlist.some(
      (item) => item.id === movieId
    );
  }

  return (
    <MovieContext.Provider
      value={{
        favorites,
        setlist,
        toggleFavorite,
        isFavorite,
        addToSetlist,
        removeFromSetlist,
        isInSetlist,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function useMovies() {
  return useContext(MovieContext);
}