import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const movies = [
  {
    id: "1",
    title: "Interestelar",
    year: "2014",
    genre: "Ficção Científica",
    rating: "8.7",
    image:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description:
      "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço em busca de um novo lar para a humanidade.",
  },
  {
    id: "2",
    title: "O Cavaleiro das Trevas",
    year: "2008",
    genre: "Ação",
    rating: "9.0",
    image:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description:
      "Batman enfrenta uma ameaça criminosa que coloca Gotham em perigo.",
  },
  {
    id: "3",
    title: "A Origem",
    year: "2010",
    genre: "Ficção Científica",
    rating: "8.8",
    image:
      "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    description:
      "Um especialista em espionagem através dos sonhos recebe uma missão extremamente perigosa.",
  },
  {
    id: "4",
    title: "Matrix",
    year: "1999",
    genre: "Ação",
    rating: "8.7",
    image:
      "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    description:
      "Um programador descobre que a realidade como ele conhece pode ser uma simulação.",
  },
];

function MovieCard({ movie, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: movie.image }} style={styles.poster} />

      <View style={styles.cardInfo}>
        <Text style={styles.movieTitle}>{movie.title}</Text>
        <Text style={styles.movieMeta}>
          {movie.year} • {movie.genre}
        </Text>

        <Text style={styles.rating}>⭐ {movie.rating}</Text>
      </View>
    </TouchableOpacity>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MOVIEFLIX</Text>

      <Text style={styles.subtitle}>Filmes em destaque</Text>

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() => navigation.navigate("Detalhes", { movie: item })}
          />
        )}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </View>
  );
}

function SearchScreen({ navigation }) {
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Buscar</Text>

      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Digite o nome de um filme..."
        placeholderTextColor="#777"
        style={styles.input}
      />

      <FlatList
        data={filteredMovies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() => navigation.navigate("Detalhes", { movie: item })}
          />
        )}
      />
    </View>
  );
}

function FavoritesScreen({ navigation, favorites, setFavorites }) {
  const favoriteMovies = movies.filter((movie) =>
    favorites.includes(movie.id)
  );

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Favoritos</Text>

      {favoriteMovies.length === 0 ? (
        <Text style={styles.empty}>
          Você ainda não adicionou filmes aos favoritos.
        </Text>
      ) : (
        <FlatList
          data={favoriteMovies}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MovieCard
              movie={item}
              onPress={() => navigation.navigate("Detalhes", { movie: item })}
            />
          )}
        />
      )}
    </View>
  );
}

function SetlistScreen({ navigation }) {
  const [setlist, setSetlist] = useState([]);

  const addMovie = (movie) => {
    if (!setlist.some((item) => item.id === movie.id)) {
      setSetlist([...setlist, movie]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Setlist</Text>

      <Text style={styles.subtitle}>
        Sua lista personalizada de filmes
      </Text>

      <ScrollView>
        {movies.map((movie) => (
          <View key={movie.id}>
            <MovieCard
              movie={movie}
              onPress={() => navigation.navigate("Detalhes", { movie })}
            />

            <TouchableOpacity
              style={styles.addButton}
              onPress={() => addMovie(movie)}
            >
              <Text style={styles.addButtonText}>+ Adicionar à Setlist</Text>
            </TouchableOpacity>
          </View>
        ))}

        {setlist.length > 0 && (
          <View style={styles.setlistBox}>
            <Text style={styles.subtitle}>Minha Setlist</Text>

            {setlist.map((movie) => (
              <Text key={movie.id} style={styles.setlistItem}>
                🎬 {movie.title}
              </Text>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

function DetailsScreen({ route }) {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: movie.image }} style={styles.bigPoster} />

      <Text style={styles.bigTitle}>{movie.title}</Text>

      <Text style={styles.movieMeta}>
        {movie.year} • {movie.genre}
      </Text>

      <Text style={styles.rating}>⭐ {movie.rating}</Text>

      <Text style={styles.description}>{movie.description}</Text>

      <TouchableOpacity style={styles.watchButton}>
        <Text style={styles.watchButtonText}>▶ Assistir trailer</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function MainTabs({ favorites, setFavorites }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#111",
          borderTopColor: "#222",
        },
        tabBarActiveTintColor: "#e50914",
        tabBarInactiveTintColor: "#777",
      }}
    >
      <Tab.Screen name="Início" component={HomeScreen} />

      <Tab.Screen name="Buscar" component={SearchScreen} />

      <Tab.Screen name="Setlist">
        {(props) => <SetlistScreen {...props} />}
      </Tab.Screen>

      <Tab.Screen name="Favoritos">
        {(props) => (
          <FavoritesScreen
            {...props}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  const [favorites, setFavorites] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#111",
          },
          headerTintColor: "#fff",
          contentStyle: {
            backgroundColor: "#050505",
          },
        }}
      >
        <Stack.Screen
          name="Principal"
          options={{ headerShown: false }}
        >
          {(props) => (
            <MainTabs
              {...props}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Detalhes"
          component={DetailsScreen}
          options={{ title: "Filme" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050505",
    padding: 20,
  },

  logo: {
    color: "#e50914",
    fontSize: 28,
    fontWeight: "900",
    marginBottom: 20,
  },

  subtitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 15,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#111",
    borderRadius: 12,
    marginBottom: 15,
    overflow: "hidden",
  },

  poster: {
    width: 100,
    height: 150,
  },

  cardInfo: {
    flex: 1,
    padding: 15,
  },

  movieTitle: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 8,
  },

  movieMeta: {
    color: "#999",
    fontSize: 14,
    marginBottom: 12,
  },

  rating: {
    color: "#ffd700",
    fontSize: 15,
  },

  input: {
    backgroundColor: "#151515",
    color: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#292929",
  },

  empty: {
    color: "#888",
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
  },

  addButton: {
    backgroundColor: "#e50914",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },

  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },

  setlistBox: {
    backgroundColor: "#111",
    padding: 20,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 30,
  },

  setlistItem: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },

  bigPoster: {
    width: "100%",
    height: 500,
    borderRadius: 15,
    marginBottom: 20,
  },

  bigTitle: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "900",
    marginBottom: 10,
  },

  description: {
    color: "#ccc",
    fontSize: 17,
    lineHeight: 27,
    marginTop: 20,
  },

  watchButton: {
    backgroundColor: "#e50914",
    padding: 16,
    borderRadius: 10,
    marginTop: 25,
    marginBottom: 30,
  },

  watchButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});