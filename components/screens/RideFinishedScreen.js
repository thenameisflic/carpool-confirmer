import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Title from "../typography/Title";
import Button from "../ui/Button";
import { createResetAction } from "../../utils";
import SuccessIcon from "../../assets/images/SuccessImg.png";

export default function ShareLocationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Title size="h5" style={styles.textCenter}>
        Carona registrada com sucesso!
      </Title>
      <Image style={styles.illustration} source={SuccessIcon} />
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
