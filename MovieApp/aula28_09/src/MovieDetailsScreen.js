import React from "react";
import {
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { useMovies } from "../context/MovieContext";

export default function MovieDetailsScreen({ route }) {
  const { movie } = route.params;

  const {
    toggleFavorite,
    isFavorite,
    addToSetlist,
    isInSetlist,
  } = useMovies();

  const favorite = isFavorite(movie.id);
  const inSetlist = isInSetlist(movie.id);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: movie.image }}
        style={styles.poster}
      />

      <Text style={styles.title}>
        {movie.title}
      </Text>

      <Text style={styles.meta}>
        {movie.year} • {movie.genre}
      </Text>

      <Text style={styles.rating}>
        ⭐ {movie.rating}
      </Text>

      <Text style={styles.description}>
        {movie.description}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => toggleFavorite(movie)}
      >
        <Text style={styles.buttonText}>
          {favorite
            ? "♥ Remover dos favoritos"
            : "♡ Adicionar aos favoritos"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          inSetlist && styles.disabled,
        ]}
        disabled={inSetlist}
        onPress={() => addToSetlist(movie)}
      >
        <Text style={styles.buttonText}>
          {inSetlist
            ? "✓ Já está na Setlist"
            : "+ Adicionar à Setlist"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505",
    padding: 20,
  },

  poster: {
    width: "100%",
    height: 500,
    borderRadius: 15,
    marginBottom: 20,
  },

  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "900",
  },

  meta: {
    color: "#888",
    marginTop: 8,
  },

  rating: {
    color: "#FFD700",
    fontSize: 17,
    marginTop: 15,
  },

  description: {
    color: "#ccc",
    fontSize: 16,
    lineHeight: 25,
    marginTop: 20,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#E50914",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },

  disabled: {
    backgroundColor: "#333",
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
