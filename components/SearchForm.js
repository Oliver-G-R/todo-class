import React, { useState } from 'react'
import { StyleSheet, Text, View,  TextInput } from 'react-native'
import { Icon } from 'react-native-elements'


export default function SearchForm({settextSearch , textSearch}) {
  

   const onChangeValueText = t => {
       settextSearch(t)

   }

    return (
        <View style={styles.boxSearch}>
           
            <TextInput
                    style={styles.input}
                    placeholder="Buscar contacto"
                    value={textSearch}
                    onChangeText={(value) => onChangeValueText(value)}
            />

        </View>
    )
}


const styles = StyleSheet.create({
    boxSearch:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        width: "90%",
        padding: 10,

        marginTop: 20,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: "#EDEDED"
    },

    input: {
        width: "100%",
        height: "100%"
    }
})