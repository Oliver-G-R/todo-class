import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler'

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export default function ButtonOpenForm({ navigation }) {
    const openForm = () => {
        navigation.navigate('Create-contact')
    }
    return (
        <View style={styles.end}>
            {/* Button acces form */}
            <TouchableOpacity onPress={() => openForm()} style={styles.buttonContainer} >

                <Text style={styles.buttonText}>+</Text>

            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#1975E3',
        borderRadius: 30,
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
    },

    end: {
        zIndex: 1,
        position: 'absolute',
        bottom: 0,
        marginBottom: 30,
        right: 20,

    },


    buttonText: {
        fontWeight: '100',
        color: '#fff',
        fontSize: 37
    }
})