import React from "react";
import { View, StyleSheet } from "react-native";
import Title from "./typography/Title";
import Body from "./typography/Body";
import Button from "./Button";
import theme from "../theme";
import { createResetAction } from "../utils";
import { ROLES } from "../constants";

export default function ShareLocationScreen({ navigation }) {
  const role = navigation.getParam("role", "");

  return (
    <View style={styles.container}>
      <Title size="h5" style={styles.textCenter}>
        Seu {role === ROLES.DRIVER ? "passageiro" : "motorista"} está a
      </Title>
      <Title size="h6" style={styles.textCenter}>
        600 metros
      </Title>
      <View style={styles.map} />
      <Button
        style={styles.button}
        title="Compartilhar Localização"
        onPress={() =>
          navigation.dispatch(createResetAction({ routeName: "RideFinished" }))
        }
      />
      <Body style={styles.buttonSubtitle}>
        Compartilhe sua localização quando estiver pronto para partir
      </Body>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    paddingHorizontal: 16
  },
  map: {
    height: 300,
    backgroundColor: theme.primaryColor,
    borderRadius: 8,
    marginTop: 24
  },
  textCenter: {
    textAlign: "center"
  },
  button: {
    marginTop: 24
  },
  buttonSubtitle: {
    textAlign: "center",
    marginTop: 8
  }
});

ShareLocationScreen.navigationOptions = () => ({
  header: null
});
