import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Alert } from "react-native";
import Title from "./typography/Title";
import theme from "../theme";
import RoleIcon from "./RoleIcon";
import RoleToggler from "./RoleToggler";
import { createResetAction } from "../utils";
import { ROLES } from "../constants";
import { createRide, fetchRide } from "../api";
import Button from "./Button";
import RNLocation from 'react-native-location';

export default function DriverScreen({ navigation }) {
  const [id, setId] = useState(null);
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  useEffect(() => {
    (async () => {
      RNLocation.requestPermission({
        ios: 'whenInUse',
        android: {
          detail: 'coarse',
          rationale: {
            title: "Nós precisamos de acesso à sua localização",
            message: "",
            buttonPositive: "OK",
            buttonNegative: "Cancelar"
          }
        }
      });
      RNLocation.configure({ distanceFilter: 0 });
      const location = await RNLocation.getLatestLocation({ timeout: 60000 });
      const position = `${location.latitude},${location.longitude}`;
      const response = await createRide(position);
      const { dataUrl, id } = await response.json();
      setId(id);
      setQrCodeUrl(dataUrl);
    })();
  }, []);

  const onContinue = async () => {
    const response = await fetchRide(id);
    const {
      passengerScanned,
      driverPosition,
      passengerPosition,
      distance
    } = await response.json();
    if (!passengerScanned) {
      Alert.alert(
        "Atenção!",
        "O passageiro ainda não escaneou o código.",
        [{ text: "OK" }],
        { cancelable: true }
      );
    } else {
      navigation.dispatch(
        createResetAction({
          routeName: "ShareLocation",
          params: {
            role: ROLES.DRIVER,
            driverPosition,
            passengerPosition,
            distance,
            rideId: id
          }
        })
      );
    }
  };

  return (
    <View style={styles.container}>
      <Title size="h5" style={styles.title}>
        Peça para o seu passageiro escanear o código abaixo
      </Title>
      {qrCodeUrl ? (
        <Image source={{ uri: qrCodeUrl }} style={styles.qrCode} />
      ) : (
        <View style={styles.qrCode} />
      )}
      {id && (
        <>
          <Title size="h5" style={styles.driverId}>
            Seu id de motorista é
          </Title>
          <Title size="h6" style={styles.textAccent}>
            {id}
          </Title>
        </>
      )}
      <Button title="Continuar" style={styles.button} onPress={onContinue} />
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
  },
  button: {
    marginTop: 24,
    alignSelf: "stretch"
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
