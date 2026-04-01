import { useEffect, useState } from 'react';
import {FlatList } from 'react-native';
import { Card, Title, Paragraph, ActivityIndicator } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://www.omdbapi.com/?s=spider%20man&apikey=1cd66749')
      .then(response => response.json())
      .then(data => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  if (loading) {
    return <ActivityIndicator style={{ marginTop: 50 }} />;
  }

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.imdbID}
      renderItem={({ item }) => (
        <Card
          style={{ margin: 10 }}
          onPress={() => navigation.navigate('Details', { movie: item })}
        >
          <Card.Content>
            <Title>{item.Title}</Title>
            <Paragraph>{item.Year}</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: item.Poster }} />
        </Card>
      )}
    />
  );
}
