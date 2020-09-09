import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList
} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {
  const [items, setItems] = useState([
    {
      id: '1',
      text: 'Hacer la tarea'
    },
    {
      id: '2',
      text: 'Estudiar'
    },
    {
      id: '3',
      text: 'Dormir'
    },
    {
      id: '4',
      text: 'Leer'
    },
  ]);
  return (
    <View style={styles.container}>
      <Header name='Rodrigo Terán'></Header>
      <FlatList data={items} renderItem={({ item }) => (
        <ListItem textItem={item.text}></ListItem>
      )}></FlatList>
    </View >
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default App;