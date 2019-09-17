import React from 'react';
import {Text, View} from "react-native";
import styles from "./home.style";

export const ContentHome = (props) => {
    return (
        <View style={styles.containerTitre}>
            <Text style={[styles.mainTextTitleWhite, styles.h1Titre]}>Au nem
                d'argent</Text>
            <Text style={[styles.mainTextTitleWhite, styles.address]}>2 rue
                d'along 57070 Metz, France</Text>
            <Text style={[styles.mainTextTitleWhite, styles.address]}>06 28 65
                56 65</Text>
            <View
                style={styles.separator}
            />
            <Text style={[
                styles.mainTextTitleWhite,
                styles.openTitle]}>HORAIRES</Text>
            <Text style={[styles.mainTextTitleWhite]}>Ouvert 7/7 de 11h30 à
                23h30</Text>

            <View style={styles.buttonCommandContainer}>

                {props.children}
            </View>
        </View>
    )
};
