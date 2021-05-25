import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View, TextInput } from 'react-native'

//Components
import ButtonOpenForm from '../components/ButtonOpenForm'
import SearchForm from '../components/SearchForm'
//screens
import ListOfContacts from '../components/ListOfContacts'



export default function Home(props) {
    const [textSearch, settextSearch] = useState('')
    
    return (
        <View style={styles.container}>
            <SearchForm 
                settextSearch ={settextSearch}
                textSearch={textSearch} />

            <ListOfContacts 
                navigation={props.navigation}
                textSearch={textSearch} 
            />

            <ButtonOpenForm navigation={props.navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
   
        backgroundColor: '#FFFFFF',

    },


})