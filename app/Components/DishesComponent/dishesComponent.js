import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';

function dishesComponent() {
  return (
      <View style={{
        flex: 1,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 5,
        marginBottom: 5,
      }}>
        <Image source={{ uri: 'https://via.placeholder.com/80' }}
               style={{ width: 80, height: 80, flex: 1 }}/>
        <View style={{ flex: 2, paddingLeft: 5 }}>
          <Text style={{ color: '#000', fontSize: 14 }}>Menu View -- 1</Text>
          <Text style={{ color: '#000', fontSize: 12 }}>Detail du plat - ligne
            1</Text>
          <Text style={{ color: '#000', fontSize: 12 }}>Detail du plat - ligne
            2</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold' }}>20
            €</Text>
        </View>
      </View>
  );
}

export default dishesComponent;
