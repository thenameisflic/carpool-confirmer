import React from "react";
import { View, StyleSheet, Image, Button } from "react-native";
import Title from "./typography/Title";
import theme from "../theme";
import RoleIcon from "./RoleIcon";
import RoleToggler from "./RoleToggler";
import { createResetAction } from "../utils";
import { ROLES } from "../constants";

export default function DriverScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Title size="h5" style={styles.title}>
        Peça para o seu passageiro escanear o código abaixo
      </Title>
      <Image
        source={{ uri: "https://placehold.it/300x300" }}
        style={styles.qrCode}
      />
      <Title size="h5" style={styles.driverId}>
        Seu id de motorista é
      </Title>
      <Title size="h6" style={styles.textAccent}>
        hardcore-blackwell
      </Title>
      <Button
        title="TODO: Skip"
        onPress={() =>
          navigation.dispatch(
            createResetAction({
              routeName: "ShareLocation",
              params: { role: ROLES.DRIVER }
            })
          )
        }
      />
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
    textAlign: "center"
  },
  qrCode: {
    width: 300,
    height: 300,
    marginTop: 24
  },
  driverId: {
    textAlign: "center",
    marginTop: 24
  },
  textAccent: {
    color: theme.primaryColor
  },
  headerLeft: {
    marginLeft: 8
  },
  headerRight: {
    paddingRight: 8
  }
});

DriverScreen.navigationOptions = ({ navigation }) => ({
  title: "Motorista",
  headerLeft: <RoleIcon style={styles.headerLeft} />,
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0
  },
  headerRight: (
    <View style={styles.headerRight}>
      <RoleToggler
        style={styles.headerRight}
        onPress={() => navigation.navigate("Passenger")}
      />
    </View>
  )
});
