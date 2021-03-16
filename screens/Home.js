import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

//Components
import ButtonOpenForm from '../components/ButtonOpenForm'

//screens
import ListOfContacts from './ListOfContacts'



export default function Home(props) {
    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1
                }}
                keyboardShouldPersistTaps='handled'
            >
                {/* Cards */}
            </ScrollView>

            <ButtonOpenForm navigation={props.navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
    },
})