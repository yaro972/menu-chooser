import React from 'react';
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  View,
} from 'react-native';
import FadeIn from '../../Animations/fadeIn';
import {getMain} from '../../API'
import styles from './MenuView.styles';

class MenuView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
    };
    this._showLoader = this._showLoader.bind(this);
  }

  componentDidMount() {
    /*getMain()
        .then((lMenu) => {

      this.setState({
        data: lMenu,
        loaded: true,
      });
    });  */

  }

  render() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
          {this._showLoader()}
        </ScrollView>
    );
  }

  _showMenuItem() {
    return this.state.data.map(el => {
      return (
          <MenuComponent
              menuItem={el.name}
              menuImage={el.img}
              key={el.id}
              id={el.id}
              click={this._onClick}
          />
      );
    });
  }

  _showLoader() {
    if (!this.state.loaded) {
      return (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#ffff00"/>
          </View>
      );
    } else {
      return (
          <View style={styles.menuEntry}>
            <FadeIn>
              {this._showMenuItem()}
            </FadeIn>
          </View>
      );
    }
  };

  _onClick(el) {
    console.log(el);

    let choice;

    switch (el) {
      case '0': {

        choice = 'Entrées';
        break;
      }

      case 1: {
        choice = 'Plats principal';
        break;
      }
      case 2: {
        choice = 'Desserts';
        break;
      }
      case 3: {
        choice = 'Menus';
        break;
      }
      case 4: {
        choice = 'Spécialités';
        break;
      }
      case 6: {
        choice = 'Plats du jour';
        break;
      }
      default:
        choice = 'Aucun choix';

    }

    Alert.alert(
        'Alert Title',
        `Votre choix : ${choice}`,
        [
          {
            text: `Vous avez choisi : ${choice}`,
            onPress: () => console.log('Ask me later pressed'),
          },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
    );

  }
}

export default MenuView;
