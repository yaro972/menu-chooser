import React from 'react';
import {View} from 'react-native';

import styles from './home.style';
import {HeaderHome} from "./HeaderHome";
import {ContentHome} from "./ContentHome";
import {CommandButton} from "./CommandButton";

class HomeComponent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <HeaderHome/>
                <ContentHome>
                    <CommandButton
                        onPress={() => this._onPress()}
                    />

                </ContentHome>
            </View>
        )
    }

    _onPress = () => {
        this.props.navigation.navigate('MenuRoute')
    }
}

export default HomeComponent;
