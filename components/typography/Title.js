import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Title({children, style, size = "h1"}) {
    return <Text style={[styles[size], style]}>{children}</Text>
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 96,
        fontFamily: "Nunito Light"
    },
    h2: {
        fontSize: 60,
        fontFamily: "Nunito Light"
    },
    h3: {
        fontSize: 48,
        fontFamily: "Nunito Regular"
    },
    h4: {
        fontSize: 34,
        fontFamily: "Nunito Regular"
    },
    h5: {
        fontSize: 24,
        fontFamily: "Nunito Regular"
    },
    h6: {
        fontSize: 20,
        fontFamily: "Nunito Bold"
    }
});
