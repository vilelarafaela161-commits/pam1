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

export default function HomeScreen({ navigation }) {
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
    flexDirection: "row",
    backgroundColor: "#111",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 15,
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
});
