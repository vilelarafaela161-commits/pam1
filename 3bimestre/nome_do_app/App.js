import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Slow Jamz</Text>

        <Text style={styles.lyrics}>
          Are you gonna be? Say that you're gonna be{'\n'}
          Oooo, oooo, oooo, oooo...
          {'\n\n'}
          She said she want some Marvin Gaye...
          {'\n\n'}
          It definitely will{'\n'}
          You know what I told her
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 15,
    borderColor: 'brown',
    backgroundColor: '#f8a72c',
  },

  content: {
    padding: 20,
    alignItems: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  lyrics: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
  },
});

