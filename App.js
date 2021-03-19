import 'react-native-gesture-handler'
import React from 'react'

//Un archivo para poder arrgelar el bug que tiene react y firebase
import { fixtimerbug } from './fixtimerbug'
fixtimerbug()

// Navegaci[on]
import { NavigationContainer } from "@react-navigation/native"
import { MyStackNavigation } from "./MyStackNavigation"
import { View } from 'react-native'


export default function App() {
  return (

    <NavigationContainer>
      <MyStackNavigation />
    </NavigationContainer>

  )
}

