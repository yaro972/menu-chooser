import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  View,
} from 'react-native';
import { getMenuList } from '../../API/menuApi';
import MenuComponent from '../../Components/MenuComponent/MenuComponent';

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
        <ScrollView contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: '#1a1a1a',
        }}>
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
              key={el.id}/>
      );
    });
  }

  _showLoader() {
    if (!this.state.loaded) {
      return (
          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
            <ActivityIndicator size="large" color="#ffff00"/>
          </View>
      );
    } else {
      return (
          <View style={{
            flex: 1,
            marginLeft: 5,
            marginRight: 5,
          }}>
            {this._showMenuItem()}
          </View>
      );
    }
  };
}

export default MenuView;
