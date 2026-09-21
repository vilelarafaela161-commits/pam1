import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.mainTitle}>Estrofes & Letras</Text>

        {/* --- PRIMEIRA MÚSICA: Sad Girl --- */}
        <Text style={styles.songTitle}>Sad Girl — Lana Del Rey</Text>
        <View style={styles.lyricsGrid}>
          
          <View style={styles.verseCard}>
            <Text style={styles.verseText}>
              Being a mistress on the side{'\n'}
              It might not appeal to fools like you{'\n'}
              Creeping around on the side{'\n'}
              Might not be something you would do
            </Text>
          </View>

          <View style={styles.verseCard}>
            <Text style={styles.verseText}>
              But you haven't seen my man (man){'\n'}
              You haven't seen my man (man, man){'\n'}
              You haven't seen my man (man){'\n'}
              You haven't seen him
            </Text>
          </View>

          <View style={styles.verseCard}>
            <Text style={styles.verseText}>
              He's got the fire{'\n'}
              And he walks with it{'\n'}
              He's got the fire{'\n'}
              And he talks with it
            </Text>
          </View>

          <View style={styles.verseCard}>
            <Text style={styles.verseText}>
              His Bonnie on the side, Bonnie on the side{'\n'}
              Makes me a sad, sad girl{'\n'}
              His money on the side, money on the side{'\n'}
              Makes me a sad, sad girl
            </Text>
          </View>

        </View>


        {/* --- SEGUNDA MÚSICA: Umbrella --- */}
        <Text style={styles.songTitle}>Umbrella — Rihanna ft. JAY-Z</Text>
        <View style={styles.lyricsGrid}>
          
          <View style={styles.verseCard}>
            <Text style={styles.verseText}>
              No clouds in my stones{'\n'}
              Let it rain, I hydroplane in the bank (eh, eh, eh){'\n'}
              Coming down with the Dow Jones{'\n'}
              When the clouds come, we gone, we Roc-A-Fella (eh, eh, eh, eh)
            </Text>
          </View>

          <View style={styles.verseCard}>
            <Text style={styles.verseText}>
              We fly higher than weather, in G5's or better{'\n'}
              You know me{'\n'}
              In anticipation for precipitation stack chips for the rainy day (eh, eh, eh){'\n'}
              Jay, Rain Man is back (eh, eh, eh){'\n'}
              With little Ms. Sunshine, Rihanna, where you at?
            </Text>
          </View>

          <View style={styles.verseCard}>
            <Text style={styles.verseText}>
              You have my heart{'\n'}
              And we'll never be worlds apart{'\n'}
              May be in magazines{'\n'}
              But you'll still be my star
            </Text>
          </View>

          <View style={styles.verseCard}>
            <Text style={styles.verseText}>
              Baby, 'cause in the dark{'\n'}
              You can't see shiny cars{'\n'}
              And that's when you need me there{'\n'}
              With you I'll always share
            </Text>
          </View>

          <View style={styles.verseCard}>
            <Text style={styles.verseText}>
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
    backgroundColor: '#0D0E12',
  },

  content: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  mainTitle: {
    fontSize: 36,
    fontWeight: '900',
    color: '#F5C518',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 40,
    textAlign: 'center',
  },

  songTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#E1E1E6',
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'flex-start',
    borderLeftWidth: 4,
    borderLeftColor: '#F5C518',
    paddingLeft: 10,
  },

  lyricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 30,
  },

  verseCard: {
    backgroundColor: '#17181F',
    borderRadius: 12,
    padding: 18,
    margin: 8,
    minWidth: 260,
    maxWidth: 320,
    borderWidth: 1,
    borderColor: '#262833',
  },

  verseText: {
    fontSize: 15,
    lineHeight: 24,
    color: '#C4C4CC',
    textAlign: 'left',
    fontStyle: 'italic',
  },
});