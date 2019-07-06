import React, { useEffect } from "react";
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";
import Title from "../typography/Title";
import theme from "../../theme";
import DriverIcon from "../../assets/images/DriverImg.png";
import PassengerIcon from "../../assets/images/PassengerImg.png";
import RNLocation from "react-native-location";

export default function Home({navigation}) {
  const { navigate } = navigation;

  useEffect(() => {
    RNLocation.requestPermission({
      ios: "whenInUse",
      android: {
        detail: "coarse",
        rationale: {
          title: "Nós precisamos de acesso à sua localização",
          message: "",
          buttonPositive: "OK",
          buttonNegative: "Cancelar"
        }
      }
    });
    RNLocation.configure({ distanceFilter: 0 });
  }, []);

  return (
    <View style={styles.container}>
      <Title size="h4" style={styles.title}>Selecione o seu perfil</Title>
      <View style={styles.row}>
        <TouchableOpacity style={styles.role} onPress={() => navigate("Driver")}>
          <Image style={styles.roleImage} source={DriverIcon} />
          <Title style={styles.roleTitle} size="h6">Motorista</Title>
        </TouchableOpacity>
        <TouchableOpacity style={styles.role} onPress={() => navigate("Passenger")}>
          <Image style={styles.roleImage} source={PassengerIcon} />
          <Title style={styles.roleTitle} size="h6">Passageiro</Title>
        </TouchableOpacity>
      </View>
    </View>
  );
}

Home.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: theme.backgroundColor,
    paddingHorizontal: 8
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40
  },
  title: {
    textAlign: "center"
  },
  role: {
    alignItems: "center"
  },
  roleTitle: {
    marginTop: 8,
    color: theme.primaryColor
  },
  roleImage: {
    width: 120,
    height: 120,
    borderRadius: 60
  }
});
