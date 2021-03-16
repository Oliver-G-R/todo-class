import React from "react";

import { createStackNavigator } from "@react-navigation/stack"

//Screens
import Home from "./screens/Home";
import Form from "./screens/Form";

const Stack = createStackNavigator()

export const MyStackNavigation = () =>
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "#fff",
            },
            headerTintColor: "#000",
            headerTitleStyle: {
                fontWeight: "normal",
                alignSelf: "center"
            },
        }}
    >

        <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Todo Class" }}
        />
        <Stack.Screen
            name="Create-contact"
            component={Form}
            options={{ title: "Crear Contacto" }}
        />

    </Stack.Navigator>