import React, { useContext } from "react";
import { View, Image, Text } from "react-native";
import pizzaLogo from "../../images/PIZZARIA.png";

import { styles } from "./LoginStyle";
import { MenuContext } from "../context/menuContext";

export function Login() {
  const { visible, setVisible } = useContext(MenuContext);

  return (
    <View style={[styles.container, { display: visible ? "flex" : "none" }]}>
      <View>
        <Image style={{ marginBottom: 40 }} source={pizzaLogo}></Image>
        <Text style={[styles.text, { fontSize: 20 }]}>Precisa de ajuda ?</Text>
        <Text style={[styles.text, { fontSize: 12 }]}>Para sua fome</Text>
      </View>
      <Text onPress={() => setVisible(!visible)} style={styles.button}>
        Fazer Pedido
      </Text>
    </View>
  );
}
