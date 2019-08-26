import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  View,
} from 'react-native';
import FadeIn from '../../Animations/fadeIn';
import { getMenuList } from '../../API/menuApi';
import MenuComponent from '../../Components/MenuComponent/MenuComponent';
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
    getMenuList().then((lMenu) => {

      this.setState({
        data: lMenu,
        loaded: true,
      });
    });

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
  }
}

export default MenuView;
