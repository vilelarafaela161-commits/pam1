import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Slow Jamz</Text>

        <Text style={styles.subtitle}>Sad Girl — Lana Del Rey</Text>

        <View style={styles.card}>
          <Text style={styles.text}>
            Slow jamz para ouvir, relaxar e curtir.
          </Text>
        </View>

        <Text style={styles.subtitle}>Umbrella — Rihanna</Text>

        <View style={styles.card}>
          <Text style={styles.text}>
            Uma seleção de músicas para deixar o ambiente mais tranquilo.
          </Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
  },

  content: {
    padding: 30,
    alignItems: 'center',
  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#f8a72c',
    marginBottom: 30,
  },

  subtitle: {
    width: '100%',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 20,
    marginBottom: 10,
  },

  card: {
    width: '100%',
    maxWidth: 700,
    backgroundColor: '#1e1e24',
    padding: 20,
    marginBottom: 15,
    borderRadius: 12,
  },

  text: {
    color: '#c4c4cc',
    fontSize: 16,
    lineHeight: 24,
  },
});