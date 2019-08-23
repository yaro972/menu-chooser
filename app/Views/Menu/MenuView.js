import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import MenuComponent from '../../Components/MenuComponent/MenuComponent';

class MenuView extends React.Component {

  render() {

    return (
        <ScrollView style={{
          flex: 1,
          paddingLeft: 5,
          paddingRight: 5,
          backgroundColor: '#1a1a1a',
        }}>
          <View style={{ flex: 1 }}>
            {this._showMenuItem()}
          </View>
        </ScrollView>
    );
  }

  _showMenuItem() {
    const listMenu = {
      data: [
        {
          id: 0,
          name: 'Entrées',
          img: 'https://via.placeholder.com/100',
        },
        {
          id: 1,
          name: 'Plats principal',
          img: 'https://via.placeholder.com/100',
        },
        {
          id: 2,
          name: 'Desserts',
          img: 'https://via.placeholder.com/100',
        },
        {
          id: 3,
          name: 'Menus',
          img: 'https://via.placeholder.com/100',
        },
        {
          id: 4,
          name: 'Spécialités',
          img: 'https://via.placeholder.com/100',
        },
        {
          id: 6,
          name: 'Plats du jour',
          img: 'https://via.placeholder.com/100',
        },
      ],
    };

    return listMenu.data.map(el => {
      return (
          <MenuComponent
              menuItem={el.name}
              menuImage={el.img}
              key={el.id}/>
      );

    });
  }

}

export default MenuView;
