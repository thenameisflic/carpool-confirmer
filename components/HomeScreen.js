import React from "react";
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";
import Title from "./typography/Title";
import theme from "../theme";

export default function Home({navigation}) {
  const { navigate } = navigation;

  return (
    <View style={styles.container}>
      <Title size="h4" style={styles.title}>Selecione o seu perfil</Title>
      <View style={styles.row}>
        <TouchableOpacity style={styles.role} onPress={() => navigate("Driver")}>
          <Image style={styles.roleImage} source={{uri: "https://placehold.it/120x120?text=Motorista"}} />
          <Title style={styles.roleTitle} size="h6">Motorista</Title>
        </TouchableOpacity>
        <TouchableOpacity style={styles.role} onPress={() => navigate("Passenger")}>
          <Image style={styles.roleImage} source={{uri: "https://placehold.it/120x120?text=Passageiro"}} />
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
