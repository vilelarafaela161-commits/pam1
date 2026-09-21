import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        
        <Text style={styles.title}>Slow Jamz</Text>

        {/* Sad Girl */}
        <Text style={styles.songTitle}>Sad Girl — Lana Del Rey</Text>
        <View style={styles.row}>
          <View style={styles.card}>
            <Text style={styles.text}>
              Being a mistress on the side{'\n'}
              It might not appeal to fools like you{'\n'}
              Creeping around on the side{'\n'}
              Might not be something you would do
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              But you haven't seen my man (man){'\n'}
              You haven't seen my man (man, man){'\n'}
              You haven't seen my man (man){'\n'}
              You haven't seen him
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              He's got the fire{'\n'}
              And he walks with it{'\n'}
              He's got the fire{'\n'}
              And he talks with it
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              His Bonnie on the side, Bonnie on the side{'\n'}
              Makes me a sad, sad girl{'\n'}
              His money on the side, money on the side{'\n'}
              Makes me a sad, sad girl
            </Text>
          </View>
        </View>

        {/* Umbrella */}
        <Text style={styles.songTitle}>Umbrella — Rihanna ft. JAY-Z</Text>
        <View style={styles.row}>
          <View style={styles.card}>
            <Text style={styles.text}>
              No clouds in my stones{'\n'}
              Let it rain, I hydroplane in the bank (eh, eh, eh){'\n'}
              Coming down with the Dow Jones{'\n'}
              When the clouds come, we gone, we Roc-A-Fella (eh, eh, eh, eh)
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              We fly higher than weather, in G5's or better{'\n'}
              You know me{'\n'}
              In anticipation for precipitation stack chips for the rainy day (eh, eh, eh){'\n'}
              Jay, Rain Man is back (eh, eh, eh){'\n'}
              With little Ms. Sunshine, Rihanna, where you at?
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              You have my heart{'\n'}
              And we'll never be worlds apart{'\n'}
              May be in magazines{'\n'}
              But you'll still be my star
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              Baby, 'cause in the dark{'\n'}
              You can't see shiny cars{'\n'}
              And that's when you need me there{'\n'}
              With you I'll always share
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.text}>
              Because{'\n'}
              When the Sun shine, we shine together{'\n'}
              Told you I'll be here forever{'\n'}
              Said I'll always be your friend{'\n'}
              Took an oath, I'ma stick it out to the end{'\n'}
              Now that it's raining more than ever
            </Text>
          </View>
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
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f8a72c',
    marginVertical: 20,
  },
  songTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#1e1e24',
    padding: 15,
    margin: 8,
    borderRadius: 8,
    width: 260,
  },
  text: {
    color: '#c4c4cc',
    fontSize: 14,
    lineHeight: 20,
  },
});