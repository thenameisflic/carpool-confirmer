import React from "react";
import { Image, StyleSheet } from "react-native";
import DriverIcon from "../../assets/images/DriverImg.png";
import PassengerIcon from "../../assets/images/PassengerImg.png";
import DriverIconWhite from "../../assets/images/DriverImg-White.png";
import PassengerIconWhite from "../../assets/images/PassengerImg-White.png";
import { ROLES } from "../../constants";

export default function RoleIcon({style, role, color = "white"}) {
    let source = null;
    if (role === ROLES.PASSENGER)
        source = color === "white" ? PassengerIconWhite : PassengerIcon;
    else 
        source = color === "white" ? DriverIconWhite : DriverIcon;
    return <Image style={[styles.roleIcon, style]} source={source} />
}

const styles = StyleSheet.create({
    roleIcon: {
        width: 40,
        height: 40,
        borderRadius: 20
    }
});
