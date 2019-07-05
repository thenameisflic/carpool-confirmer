import React from "react";
import { View, StyleSheet, Button } from "react-native";
import Title from "./typography/Title";
import theme from "../theme";
import RoleIcon from "./RoleIcon";
import RoleToggler from "./RoleToggler";
import QRCodeScanner from "react-native-qrcode-scanner";
import { ROLES } from "../constants";
import { createResetAction } from "../utils";

export default function PassengerScreen({navigation}) {
  const onQrCode = e => {
    console.log(e.data);
  };

  return (
    <View style={styles.container}>
      <Button
        title="TODO: Skip"
        onPress={() =>
          navigation.dispatch(
            createResetAction({
              routeName: "ShareLocation",
              params: { role: ROLES.PASSENGER }
            })
          )
        }
      />
      <Title size="h5" style={styles.title}>
        Escaneie o código do seu motorista
      </Title>
      <QRCodeScanner onRead={onQrCode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundColor,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  title: {
    textAlign: "center",
    marginTop: 40,
    marginBottom: 40
  },
  headerLeft: {
    marginLeft: 8
  },
  headerRight: {
    paddingRight: 8
  }
});

PassengerScreen.navigationOptions = ({ navigation }) => ({
  title: "Passageiro",
  headerLeft: <RoleIcon style={styles.headerLeft} />,
  headerRight: (
    <View style={styles.headerRight}>
      <RoleToggler
        style={styles.headerRight}
        onPress={() => navigation.navigate("Driver")}
      />
    </View>
  )
});
