import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigator from "./TabNavigator";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#111",
          },

          headerTintColor: "#fff",

          contentStyle: {
            backgroundColor: "#050505",
          },
        }}
      >
        <Stack.Screen
          name="Principal"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Detalhes"
          component={MovieDetailsScreen}
          options={{
            title: "Detalhes do filme",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
