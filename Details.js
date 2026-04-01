import { View, Image, StyleSheet } from 'react-native';
import { Title, Paragraph } from 'react-native-paper';

export default function DetailsScreen({ route }) {
  const { movie } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: movie.Poster }} style={styles.image} />
      <Title style={styles.text}>{movie.Title}</Title>
      <Paragraph style={styles.text}>Ano: {movie.Year}</Paragraph>
      <Paragraph style={styles.text}>Tipo: {movie.Type}</Paragraph>
      <Paragraph style={styles.text}>ID: {movie.imdbID}</Paragraph>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 300,
    marginBottom: 20,
  },
  text: {
    color: 'black'
  }
});