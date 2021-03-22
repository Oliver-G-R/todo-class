import 'react-native-gesture-handler'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';

//Un archivo para poder arrgelar el bug que tiene react y firebase
import { fixtimerbug } from './fixtimerbug'
fixtimerbug()

// Navegación
import { NavigationContainer } from "@react-navigation/native"
import { MyStackNavigation } from "./MyStackNavigation"



export default function App() {
  return (

    <SafeAreaProvider>
      <NavigationContainer>
        <MyStackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>

  )
}

