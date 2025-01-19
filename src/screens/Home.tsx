import React from "react";
import { View } from "react-native";
import { Login } from "../components/login/Login";
import { Menu } from "../components/menu/Menu";

import MenuProvider from "../components/context/menuContext";

import { styles } from "./HomeStyle";

export function Home() {
  return (
    <MenuProvider>
      <View style={styles.container}>
        <Login />
        <Menu />
      </View>
    </MenuProvider>
  );
}
