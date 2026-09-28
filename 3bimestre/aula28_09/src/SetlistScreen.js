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

export default function SetlistScreen({ navigation }) {
  const { setlist, removeFromSetlist } = useMovies();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎬 Minha Setlist</Text>

      <Text style={styles.subtitle}>
        Filmes que você quer assistir
      </Text>

      {setlist.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyIcon}>🎬</Text>

          <Text style={styles.emptyTitle}>
            Sua Setlist está vazia
          </Text>

          <Text style={styles.emptyText}>
            Adicione filmes para montar sua lista.
          </Text>
        </View>
      ) : (
        <FlatList
          data={setlist}
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

              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeFromSetlist(item.id)}
              >
                <Text style={styles.removeText}>
                  Remover da Setlist
                </Text>
              </TouchableOpacity>
            </View>
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
    marginBottom: 5,
  },

  subtitle: {
    color: "#888",
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

  removeButton: {
    backgroundColor: "#222",
    padding: 12,
  },

  removeText: {
    color: "#ff5555",
    textAlign: "center",
    fontWeight: "bold",
  },

  empty: {
    alignItems: "center",
    marginTop: 100,
  },

  emptyIcon: {
    fontSize: 50,
    marginBottom: 15,
  },

  emptyTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  emptyText: {
    color: "#777",
    marginTop: 8,
  },
});
