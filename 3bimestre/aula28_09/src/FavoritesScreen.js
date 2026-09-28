import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { useMovies } from "../context/MovieContext";

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useMovies();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>❤️ Favoritos</Text>

      {favorites.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.icon}>❤️</Text>

          <Text style={styles.emptyTitle}>
            Nenhum favorito
          </Text>

          <Text style={styles.emptyText}>
            Seus filmes favoritos aparecerão aqui.
          </Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
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
          )}
        />
      )}
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

  card: {
    flexDirection: "row",
    backgroundColor: "#111",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 15,
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

  empty: {
    alignItems: "center",
    marginTop: 100,
  },

  icon: {
    fontSize: 50,
  },

  emptyTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
  },

  emptyText: {
    color: "#777",
    marginTop: 8,
  },
});
