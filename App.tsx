import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Character, { CharacterProps } from './components/Character';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  const [characters, setCharacters] = useState<CharacterProps[]>([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results as CharacterProps[]))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    if (characters) {
      console.log(characters[0]);
    }
  }, [characters])
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.mainContainer}>
        <FlatList
          data={characters}
          // scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Character {...item} />}
          keyExtractor={item => item.id.toString()}
          removeClippedSubviews={true}
          initialNumToRender={40}
          windowSize={5}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default App;
