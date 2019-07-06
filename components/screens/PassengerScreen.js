import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../../theme";
import RoleIcon from "../ui/RoleIcon";
import RoleToggler from "../ui/RoleToggler";
import QRCodeScanner from "react-native-qrcode-scanner";
import { ROLES } from "../../constants";
import { createResetAction } from "../../utils";
import RNLocation from "react-native-location";
import { scanPassenger } from "../../api";

export default function PassengerScreen({ navigation }) {
  const onQrCode = async e => {
    const location = await RNLocation.getLatestLocation({ timeout: 60000 });
    const position = `${location.latitude},${location.longitude}`;
    const response = await scanPassenger(e.data, position);
    const {
      id,
      driverPosition,
      passengerPosition,
      distance
    } = await response.json();

    navigation.dispatch(
      createResetAction({
        routeName: "ShareLocation",
        params: {
          role: ROLES.PASSENGER,
          driverPosition,
          passengerPosition,
          distance,
          rideId: id
        }
      })
    );
  };

  return (
    <View style={styles.container}>
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
  headerLeft: <RoleIcon style={styles.headerLeft} role={ROLES.PASSENGER} color="primary" />,
  headerRight: (
    <View style={styles.headerRight}>
      <RoleToggler
        style={styles.headerRight}
        onPress={() => navigation.navigate("Driver")}
        role={ROLES.DRIVER}
      />
    </View>
  )
});
