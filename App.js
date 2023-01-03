import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderBackButton } from "@react-navigation/elements";
import { MaterialIcons } from "@expo/vector-icons";
import MenuView from "./src/views/menuView";
import CreateItemView from "./src/views/createItemView";

const Stack = createNativeStackNavigator();

export default function App() {
  const renderGoBack = (navigation, color, confirmar) => {
    return (
      <HeaderBackButton
        labelVisible={false}
        tintColor={color}
        onPress={() => navigation.goBack()}
        style={{ marginLeft: 5 }}
      >
        <Text>
          <MaterialIcons name="arrow-back" size={24} color={color} />
        </Text>
      </HeaderBackButton>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MenuView"
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: "#311e6f",
          },
        })}
      >
        <Stack.Screen
          name="MenuView"
          component={MenuView}
          options={({ navigation }) => ({
            gestureEnabled: false,
            title: "Menú Principal",
            headerTintColor: "#FFF",
            headerStyle: {
              backgroundColor: "#452b99",
            },
          })}
        />
        <Stack.Screen
          name="CreateItemView"
          component={CreateItemView}
          options={({ navigation }) => ({
            gestureEnabled: false,
            title: "Crear Item",
            headerStyle: {
              backgroundColor: "#452b99",
            },
            headerTintColor: "#FFF",
            headerLeft: () => renderGoBack(navigation, "#FFF", false),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
