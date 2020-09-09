import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Alert
} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import { getRandomId } from "./helpers/getRandomId";

const App = () => {
  const [items, setItems] = useState([]);
  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };
  const editItem = id => {
    deleteItem(id);
  };
  const addItem = textItem => {
    if (!textItem) {
      Alert.alert(
        'Error',
        'Por favor ingresa una tarea',
        [{ text: 'Ok' }],
        { cancelable: false }
      );
    } else {
      setItems(prevItems => {
        return [...prevItems, {
          id: getRandomId(),
          text: textItem,
        }];
      });
    };
  };
  return (
    <View style={styles.container}>
      <Header></Header>
      <AddItem addItem={addItem}></AddItem>
      <FlatList data={items} renderItem={({ item }) => (
        <ListItem item={item} deleteItem={deleteItem} editItem={editItem}></ListItem>
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