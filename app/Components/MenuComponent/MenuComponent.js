import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';

function MenuComponent({ menuItem, menuImage }) {
  return (
      <View style={{
        flex: 1,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderColor: '#c0d1ce',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 5,
        marginBottom: 5,
        paddingTop: 5,
        paddingBottom: 10,
      }}>
        <Image source={{ uri: menuImage }}
               style={{ width: 120, height: 120, flex: 1 }}/>
        <View style={{
          flex: 2, paddingLeft: 25,
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}>
          <Text style={{ color: '#c0d1ce', fontSize: 18 }}>{menuItem}</Text>
        </View>
      </View>
  );
}

export default MenuComponent;
