import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import theme from "../theme";
import Title from "./typography/Title";

export default function Button({ onPress, title, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Title size="h6" style={styles.text}>{title}</Title>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primaryColor,
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    borderRadius: 4
  },
  text: {
      color: theme.backgroundColor
  }
});
