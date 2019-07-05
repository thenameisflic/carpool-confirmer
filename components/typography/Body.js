import React from 'react';
import { Text, StyleSheet } from "react-native";

export default function Body({children, style}) {
    return <Text style={[styles.body, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
    body: {
        fontSize: 16,
        fontFamily: "Nunito Sans Regular"
    }
});
