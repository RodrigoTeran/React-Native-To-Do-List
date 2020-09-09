import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native';

const Header = ({
  name
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://randomuser.me/api/portraits/men/42.jpg' }} style={styles.image}></Image>
      <Text style={styles.text}>{name}</Text>
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
    backgroundColor: '#087192',
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
    fontSize: 20,
    marginLeft: 20
  }
});

export default Header;