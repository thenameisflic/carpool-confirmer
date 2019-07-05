import React from "react";
import { View, StyleSheet } from "react-native";
import Title from "./typography/Title";
import Button from "./Button";
import theme from "../theme";
import { createResetAction } from "../utils";

export default function ShareLocationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Title size="h5" style={styles.textCenter}>
        Carona registrada com sucesso!
      </Title>
      <View style={styles.illustration} />
      <Button
        style={styles.button}
        title="Iniciar outra carona"
        onPress={() =>
          navigation.dispatch(createResetAction({ routeName: "Home" }))
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16
  },
  illustration: {
    width: 300,
    height: 300,
    backgroundColor: theme.primaryColor,
    borderRadius: 150,
    marginTop: 24
  },
  textCenter: {
    textAlign: "center"
  },
  button: {
    marginTop: 24,
    alignSelf: "stretch"
  }
});

ShareLocationScreen.navigationOptions = () => ({
  header: null
});
