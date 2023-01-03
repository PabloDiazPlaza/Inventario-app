import React from "react";
import { View } from "react-native";
import Menu from "../components/menu";

const MenuView = (props) => {
  const { navigation, route } = props;
  console.log("navo: ", route.headerLeft);
  return (
    // Botones
    <View
      style={{
        // marginEnd: "15%",
        marginTop: "10%",
        marginLeft: "12%",
        marginRight: "12%",
        height: "80%",
        // backgroundColor: "black",
      }}
    >
      <Menu navigation={navigation} route={route} />
    </View>
  );
};

export default MenuView;
