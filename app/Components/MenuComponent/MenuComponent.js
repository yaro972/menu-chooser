import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './MenuComponent.styles';

function MenuComponent({ id, menuItem, menuImage, click }) {
  return (
      <TouchableOpacity
          style={styles.container}
          onPress={() => { click(id);}}

      >
        <Image source={{ uri: menuImage }}
               style={styles.menuImage}/>
        <View style={styles.textContainer}>
          <Text style={styles.textMenu}>{menuItem}</Text>
        </View>
      </TouchableOpacity>
  );
}

export default MenuComponent;
