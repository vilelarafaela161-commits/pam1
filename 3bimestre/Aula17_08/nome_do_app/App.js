import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
//desinstalar e instalar o expo, 
// perguntar pro prof pq nao ta aparecendo as musicas no lugar desse link imenso
const musicas = [
  { id: '1', title: 'A&W' },
  { id: '2', title: 'West Coast' },
  { id: '3', title: 'Video Games' },
  { id: '4', title: 'Born to Die' },
  { id: '5', title: 'Young and Beautiful' },
  { id: '6', title: 'Summertime Sadness' },
  { id: '7', title: 'Brooklyn Baby' },
  { id: '8', title: 'Cinnamon Girl' },
  { id: '9', title: 'Mariners Apartment Complex' },
  { id: '10', title: 'Venice Bitch' },
  { id: '11', title: 'Norman Fucking Rockwell' },
  { id: '12', title: 'Ride' },
  { id: '13', title: 'Shades of Cool' },
  { id: '14', title: 'Dark Paradise' },
  { id: '15', title: 'Blue Jeans' },
  { id: '16', title: 'Radio' },
  { id: '17', title: 'National Anthem' },
  { id: '18', title: 'Love' },
  { id: '19', title: "Doin' Time" },
  { id: '20', title: 'The Greatest' },
  { id: '21', title: 'Let The Light In' },
  { id: '22', title: "Did you know that there's a tunnel under Ocean Blvd" },
  { id: '23', title: 'Chemtrails Over the Country Club' },
  { id: '24', title: 'White Dress' },
  { id: '25', title: 'Tulsa Jesus Freak' },
  { id: '26', title: 'Dealer' },
  { id: '27', title: 'Fishtail' },
  { id: '28', title: 'Margaret' },
  { id: '29', title: 'Happiness is a butterfly' },
  { id: '30', title: 'Hope is a dangerous thing for a woman like me to have – but I have it' },
  { id: '31', title: 'Cruel World' },
  { id: '32', title: 'Terrence Loves You' },
  { id: '33', title: 'Freak' },
  { id: '34', title: 'Music to Watch Boys To' },
  { id: '35', title: 'High By the Beach' },
  { id: '36', title: 'Art Deco' },
  { id: '37', title: 'God Knows I Tried' },
  { id: '38', title: 'Salvatore' },
  { id: '39', title: 'The Blackest Day' },
  { id: '40', title: '13 Beaches' },
  { id: '41', title: 'Get Free' },
  { id: '42', title: 'Lust for Life' },
  { id: '43', title: 'Cherry' },
  { id: '44', title: 'God Bless America – And All the Beautiful Women in It' },
  { id: '45', title: 'Heroin' },
  { id: '46', title: 'Change' },
  { id: '47', title: 'Love song' },
  { id: '48', title: 'Fuck it I love you' },
  { id: '49', title: 'Bartender' },
  { id: '50', title: 'California' },

  // Unreleased / demos
  { id: '51', title: 'Serial Killer' },
  { id: '52', title: 'Queen of Disaster' },
  { id: '53', title: 'Jealous Girl' },
  { id: '54', title: 'You Can Be the Boss' },
  { id: '55', title: 'Back to the Basics' },
  { id: '56', title: 'Kinda Outta Luck' },
  { id: '57', title: 'Meet Me in the Pale Moonlight' },
  { id: '58', title: 'Fine China' },
  { id: '59', title: 'Prom Song (Gone Wrong)' },
  { id: '60', title: 'JFK' },
  { id: '61', title: 'Us Against the World' },
  { id: '62', title: 'Driving in Cars with Boys' },
  { id: '63', title: 'Dangerous Girl' },
  { id: '64', title: 'Because of You' },
  { id: '65', title: 'Your Girl' },
  { id: '66', title: 'Angels Forever' },
  { id: '67', title: 'Hollywood' },
  { id: '68', title: "I Don't Wanna Go" },
  { id: '69', title: 'Playing Dangerous' },
  { id: '70', title: 'Velvet Crowbar' },
  { id: '71', title: 'Trash Magic' },
  { id: '72', title: 'Put Me in a Movie' },
  { id: '73', title: 'Maha Maha' },
  { id: '74', title: 'Tired of Singing the Blues' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lana Del Rey</Text>
      <Text style={styles.subtitle}>Songs</Text>

      <FlatList
        data={musicas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.song}>
            <Text style={styles.number}>{item.id}</Text>
            <Text style={styles.songTitle}>{item.title}</Text>
          </View>
        )}
      />

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1015',
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  subtitle: {
    color: '#c9a9b5',
    fontSize: 16,
    marginBottom: 20,
  },

  song: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a1b22',
    padding: 16,
    marginBottom: 8,
    borderRadius: 10,
  },

  number: {
    color: '#a77b8b',
    width: 35,
    fontSize: 14,
  },

  songTitle: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
  },
});