import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import styles from './home.style';

export default class HomeComponent extends React.Component {
  render() {
    return (
        <View Style={styles.container}>
          <Text>Hello</Text>
        </View>
    );
  }
}
