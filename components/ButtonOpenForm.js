import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export default function ButtonOpenForm({ navigation }) {
    const openForm = () => {
        navigation.navigate('Create-contact')
    }
    return (
        <View style={styles.end}>
            {/* Button acces form */}
            <TouchableOpacity onPress={() => openForm()} style={styles.buttonContainer} >

                <View><Text style={styles.buttonText}>+</Text></View>

            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#1975E3',
        borderRadius: 60,
        width: 38,
        height: 38,
        justifyContent: 'center',
        alignItems: 'center',
    },

    end: {
        zIndex: 1,
        position: 'absolute',
        right: 20,
        top: -20
    },

    buttonText: {
        fontWeight: '100',
        color: '#fff',
        fontSize: 30
    }
})