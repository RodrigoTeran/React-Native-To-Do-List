import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddItem = ({
  addItem
}) => {
  const [text, setText] = useState('');
  const onChange = textValue => {
    setText(textValue);
  };
  const addItemFunction = () => {
    addItem(text);
    setText('');
  };
  return (
    <View>
      <TextInput value={text} onChangeText={onChange} placeholder='Añadir tarea' style={styles.input}></TextInput>
      <TouchableOpacity style={styles.button} onPress={addItemFunction}>
        <Text style={styles.buttonText}>
          <Icon name='plus' size={20}></Icon> Añadir tarea
          </Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
    paddingLeft: 10
  },
  button: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5
  },
  buttonText: {
    color: '#40377F',
    fontSize: 20,
    textAlign: 'center'
  }
});

export default AddItem;