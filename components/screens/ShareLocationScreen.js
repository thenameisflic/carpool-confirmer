import React from "react";
import { View, StyleSheet } from "react-native";
import Title from "../typography/Title";
import Body from "../typography/Body";
import Button from "../ui/Button";
import { createResetAction } from "../../utils";
import { ROLES } from "../../constants";
import MapView, { Marker } from "react-native-maps";
import { confirmDriver, confirmPassenger } from "../../api";

export default function ShareLocationScreen({ navigation }) {
  const role = navigation.getParam("role", "");
  const rideId = navigation.getParam("rideId", "");
  const driverPosition = navigation.getParam("driverPosition", "");
  const passengerPosition = navigation.getParam("passengerPosition", "");
  const distance = navigation.getParam("distance", "");

  const driverLatLng = {
    latitude: parseFloat(driverPosition.split(",")[0]),
    longitude: parseFloat(driverPosition.split(",")[1])
  };

  const passengerLatLng = {
    latitude: parseFloat(passengerPosition.split(",")[0]),
    longitude: parseFloat(passengerPosition.split(",")[1])
  };

  const onContinue = async () => {
    if (role === ROLES.DRIVER) {
      await confirmDriver(rideId, driverPosition);
    } else {
      await confirmPassenger(rideId, passengerPosition);
    }
    navigation.dispatch(createResetAction({ routeName: "RideFinished" }));
  };

  return (
    <View style={styles.container}>
      {role === ROLES.PASSENGER && (
        <>
          <Title size="h5" style={styles.textCenter}>
            O id do seu motorista é
          </Title>
          <Title size="h6" style={styles.textCenter}>
            {rideId}
          </Title>
        </>
      )}
      <Title size="h5" style={styles.textCenter}>
        Seu {role === ROLES.DRIVER ? "passageiro" : "motorista"} está a
      </Title>
      <Title size="h6" style={styles.textCenter}>
        {distance} metros
      </Title>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={{
            ...(role === ROLES.DRIVER ? driverLatLng : passengerLatLng),
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
        >
          <Marker
            coordinate={driverLatLng}
            title={
              role === ROLES.DRIVER ? "Você está aqui" : "O motorista está aqui"
            }
          />
          <Marker
            coordinate={passengerLatLng}
            title={
              role === ROLES.PASSENGER
                ? "Você está aqui"
                : "O passageiro está aqui"
            }
          />
        </MapView>
      </View>
      <Button
        style={styles.button}
        title="Compartilhar Localização"
        onPress={onContinue}
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
  mapContainer: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    borderRadius: 8,
    marginTop: 24
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 8
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
