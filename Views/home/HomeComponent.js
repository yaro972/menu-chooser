import React from 'react';
import {
  View,
  Image,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './home.style';

export default class HomeComponent extends React.Component {
  onCommand() {
    console.log('On Command');
  };

  render() {
    return (

        <View style={styles.container}>
          <View style={styles.containerImage}>
            <Image
                source={require(
                    '../../assets/img/vietnam_restaurant_300.jpg')}
                style={styles.mainImage}/>
          </View>

          <View style={styles.containerTitre}>
            <Text style={[styles.mainTextTitleWhite, styles.h1Titre]}>Au nem
              d'argent</Text>
            <Text style={[styles.mainTextTitleWhite, styles.address]}>2 rue
              d'along 57070 Metz, France</Text>
            <Text style={[styles.mainTextTitleWhite, styles.address]}>06 28 65
              56 65</Text>
            <Text style={[
              styles.mainTextTitleWhite,
              styles.openTitle]}>HORAIRES</Text>
            <Text style={[styles.mainTextTitleWhite]}>Ouvert 7/7 de 11h30 à
              23h30</Text>

            <View style={styles.buttonCommandContainer}>

              <TouchableOpacity onPress={this.onCommand}
                                style={styles.buttonCommand}
                                activeOpacity={0.7}
              >
                <Text style={styles.textButtonCommand}>Commander</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    );
  }
}
