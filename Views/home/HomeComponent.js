import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import styles from './home.style';

export default class HomeComponent extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.containerImage}>
            <Image source={require('../../assets/img/vietnam_restaurant_300.jpg')}
                   style={styles.mainImage}/>
          </View>
    
        <View style={styles.containerTitre}>
          <Text style={[styles.mainTitle]}>Restaurant Soleil  </Text>
          <Text style={[styles.mainTitle]}>2 rue d'along 57070 Metz, France</Text>
          <Text style={[styles.mainTitle]}>06 28 65 56 65</Text>
          <Text style={[styles.mainTitle]}>HORAIRES</Text>
          <Text style={[styles.mainTitle]}>Ouvert 7/7 de 11h30 à 23h30</Text>
        </View>
        {/*<ImageBackground source={...}*/}
        {/*                 style={{ width: '100%', height: '100%' }}>*/}
        {/*  <Text>Inside</Text>*/}
        {/*</ImageBackground>*/}
      </View>
    );
  }
}
