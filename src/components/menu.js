import React from "react";
import { View, Alert, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Menu = ({ navigation, route }) => {
  return (
    <View>
      <View
        style={{
          marginTop: "12%",
        }}
      >
        {/* Boton Crear Item */}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("CreateItemView", { name: "Jane" })
          }
        >
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              backgroundColor: "#2b8399",
              borderRadius: "30px",
              width: "100%",
              height: "45%",
            }}
          >
            <MaterialIcons name="add-circle" size={40} color={""} />
            <Text
              style={{ fontSize: "24", textAlign: "center", color: "#FFF" }}
            >
              {"            "}Crear Item
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: "-40%",
        }}
      >
        {/* Boton Crear Item */}
        <TouchableOpacity onPress={() => Alert.alert("Botón Presionado")}>
          <View
            style={{
              flexDirection: "row",
              padding: 8,
              backgroundColor: "#2AADE8",
              borderRadius: "30px",
              width: "100%",
              height: "40%",
            }}
          >
            <Text style={{ fontSize: "24", textAlign: "center" }}>
              {"                   "}Listar Item
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: "-55%",
        }}
      >
        {/* Boton Crear Item */}
        <TouchableOpacity onPress={() => Alert.alert("Botón Presionado")}>
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              backgroundColor: "#2AADE8",
              borderRadius: "30px",
              width: "100%",
              height: "40%",
            }}
          >
            <Text style={{ fontSize: "24", textAlign: "center" }}>
              {"                   "}Listar Item
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;
