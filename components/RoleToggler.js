import React from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import RoleIcon from "./RoleIcon";
import theme from "../theme";
import ChevronRight from "../assets/images/ChevronRight.png";

export default function RoleToggler({onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <RoleIcon style={styles.icon} />
      <Image source={ChevronRight} style={styles.chevron} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.primaryColor,
    borderRadius: 4,
    flexDirection: "row",
    paddingLeft: 12
  },
  icon: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  chevron: {
      width: 32,
      height: 32
  }
});
