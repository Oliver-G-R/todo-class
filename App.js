import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Navigation
import { NavigationContainer } from "@react-navigation/native"
import { MyStackNavigation } from "./MyStackNavigation"

export default function App() {
  return (
    <NavigationContainer>
      <MyStackNavigation />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
