import React from "react";
import { Image, StyleSheet } from "react-native";

export default function RoleIcon({style}) {
    return <Image style={[styles.roleIcon, style]} source={{uri: "https://placehold.it/40x40"}} />
}

const styles = StyleSheet.create({
    roleIcon: {
        width: 40,
        height: 40,
        borderRadius: 20
    }
});
