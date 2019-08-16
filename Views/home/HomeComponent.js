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
            <Image source={require('../../assets/img/accueil_img.jpg')}
                   style={styles.mainImage}/>
          </View>
          <View style={styles.containerTitre}>
            <Text style={[styles.mainTitle]}>Restaurant Soleil  </Text>
            <Text style={[styles.mainTitle]}>Votre restaurant Vietnamien</Text>
            <Text style={[styles.mainTitle]}>Menu</Text>
          </View>
          {/*<ImageBackground source={...}*/}
          {/*                 style={{ width: '100%', height: '100%' }}>*/}
          {/*  <Text>Inside</Text>*/}
          {/*</ImageBackground>*/}
        </View>
    );
  }
}
