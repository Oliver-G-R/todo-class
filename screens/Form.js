import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler'

import { saveContactFB } from '../helpers/firebaseUpload'

export default function Form(props) {

    const initialState = {
        name: '',
        lastName: '',
        email: '',
        tel: '',
        subject: '',
        degree: '',
        group: '',
        description: ''
    }

    const [inputValue, setinputValue] = useState(initialState)


    const onChangeValueText = (value, name) =>
        setinputValue({ ...inputValue, [name]: value })

    const saveContact = () => {
        saveContactFB(inputValue)
        setinputValue(initialState)
        props.navigation.navigate('Home')
    }



    return (
        <>
            <ScrollView style={styles.container}>


                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    value={inputValue.name}
                    onChangeText={(value) => onChangeValueText(value, 'name')}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Apelldio"
                    value={inputValue.lastName}
                    onChangeText={(value) => onChangeValueText(value, 'lastName')}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Correo"
                    value={inputValue.email}
                    onChangeText={(value) => onChangeValueText(value, 'email')}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Télefono"
                    value={inputValue.tel}
                    onChangeText={(value) => onChangeValueText(value, 'tel')}
                />

                {/* Group two */}
                <Text style={styles.title}>
                    Extra
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Materia"
                    value={inputValue.subject}
                    onChangeText={(value) => onChangeValueText(value, 'subject')}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Grado"
                    value={inputValue.degree}
                    onChangeText={(value) => onChangeValueText(value, 'degree')}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Grupo"
                    value={inputValue.group}
                    onChangeText={(value) => onChangeValueText(value, 'group')}
                />

                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={styles.input}
                    placeholder="Descripción"
                    value={inputValue.description}
                    onChangeText={(value) => onChangeValueText(value, 'description')}
                />


                {/* Button acces form */}
                <TouchableOpacity onPress={() => saveContact()} style={styles.btnSaved} >

                    <Text style={styles.buttonText}>Guardar</Text>

                </TouchableOpacity>

            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        backgroundColor: '#FFFFFF'
    },

    title: {
        fontSize: 17,
        marginBottom: 10
    },

    input: {
        padding: 10,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderColor: '#6262627a',
        height: 50,
        color: '#626262'
    },


    btnSaved: {
        padding: 10,
        alignItems: 'center',
        width: 90,
        backgroundColor: '#1975E3'
    },

    buttonText: {
        color: '#fff',

        fontSize: 17
    }
})