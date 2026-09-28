import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

import { movies } from "../data/movies";
import { useMovies } from "../context/MovieContext";

export default function SearchScreen({ navigation }) {
  const [search, setSearch] = useState("");

  const {
    toggleFavorite,
    isFavorite,
    addToSetlist,
    isInSetlist,
  } = useMovies();

  const results = movies.filter((movie) =>
    movie.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        🔎 Buscar filmes
      </Text>

      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Digite o nome do filme..."
        placeholderTextColor="#777"
        style={styles.input}
      />

      <FlatList
        data={results}
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
                <Text style={styles.movieTitle}>
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
                  {isFavorite(item.id)
                    ? "❤️ Favorito"
                    : "🤍 Favoritar"}
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
        ListEmptyComponent={
          <Text style={styles.empty}>
            Nenhum filme encontrado.
          </Text>
        }
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

  title: {
    color: "#E50914",
    fontSize: 28,
    fontWeight: "900",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#111",
    color: "#fff",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#292929",
    marginBottom: 20,
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
    width: 95,
    height: 140,
  },

  info: {
    flex: 1,
    padding: 15,
  },

  movieTitle: {
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

  empty: {
    color: "#777",
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
  },
});
