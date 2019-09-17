import {Image, View} from "react-native";
import styles from "./home.style";
import React from "react";

export const HeaderHome = () => {
    return (
        <View style={styles.containerImage}>
            <Image
                source={require(
                    '../../assets/img/vietnam_restaurant_300.jpg')}
                style={styles.mainImage}/>
        </View>

    )
};
