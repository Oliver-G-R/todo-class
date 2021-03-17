import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import { useFetchContacts } from '../hooks/useFetchContacts'
export default function ListOfContacts() {


    const [contacts] = useFetchContacts()
    console.log(contacts)
    return (
        <View>
            <Text>
                Esto es la lista de contactos
            </Text>
        </View>
    )
}
