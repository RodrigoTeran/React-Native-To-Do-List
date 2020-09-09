import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tareas</Text>
    </View>
  )
};

Header.defaultProps = {
  name: 'Perfil'
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#40377F',
    flexDirection: 'row',
    marginBottom: 10
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2
  },
  text: {
    color: '#FFF',
    fontSize: 20
  }
});

export default Header;