import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

import { movies } from "../data/movies";
import { useMovies } from "../context/MovieContext";

export default function HomeScreen({ navigation }) {
  const {
    toggleFavorite,
    isFavorite,
    addToSetlist,
    isInSetlist,
  } = useMovies();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MOVIEFLIX</Text>

      <Text style={styles.heading}>
        Filmes em destaque
      </Text>

      <FlatList
        data={movies}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity
              style={styles.movieArea}
              onPress={() =>
                navigation.navigate("Detalhes", {
                  movie: item,
                })
              }
            >
              <Image
                source={{ uri: item.image }}
                style={styles.poster}
              />

              <View style={styles.info}>
                <Text style={styles.title}>
                  {item.title}
                </Text>

                <Text style={styles.meta}>
                  {item.year} • {item.genre}
                </Text>

                <Text style={styles.rating}>
                  ⭐ {item.rating}
                </Text>
              </View>
            </TouchableOpacity>

            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => toggleFavorite(item)}
              >
                <Text style={styles.actionText}>
                  {isFavorite(item.id) ? "❤️ Favorito" : "🤍 Favoritar"}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => addToSetlist(item)}
              >
                <Text style={styles.actionText}>
                  {isInSetlist(item.id)
                    ? "✓ Na Setlist"
                    : "+ Setlist"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505",
    padding: 20,
  },

  logo: {
    color: "#E50914",
    fontSize: 28,
    fontWeight: "900",
    marginBottom: 25,
  },

  heading: {
    color: "#fff",
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#111",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 15,
  },

  movieArea: {
    flexDirection: "row",
  },

  poster: {
    width: 100,
    height: 150,
  },

  info: {
    flex: 1,
    padding: 15,
  },

  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },

  meta: {
    color: "#888",
    marginBottom: 12,
  },

  rating: {
    color: "#FFD700",
  },

  actions: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#222",
  },

  actionButton: {
    flex: 1,
    padding: 13,
  },

  actionText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 13,
    fontWeight: "bold",
  },
});
