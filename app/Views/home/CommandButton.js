import styles from "./home.style";
import {Text, TouchableOpacity} from "react-native";
import React from "react";

export const CommandButton = ({onPress}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.buttonCommand}
            activeOpacity={0.7}
        >
            <Text style={styles.textButtonCommand}>Commander</Text>
        </TouchableOpacity>
    )
};
