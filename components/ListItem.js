import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListItem = ({
  item,
  deleteItem,
  editItem
}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <View style={styles.iconsContainer}>
          <Text style={styles.listItemText}>{item.text}</Text>
          <Icon
            style={{
              marginLeft: 20
            }}
            onPress={() => editItem(item.id)}
            name='edit'
            size={20}
            color='#5F960E'></Icon>
        </View>
        <Icon
          onPress={() => deleteItem(item.id)}
          name='remove'
          size={20}
          color='#B80000'></Icon>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listItemText: {
    fontSize: 18,
    maxWidth: 300,
  },
  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

export default ListItem;