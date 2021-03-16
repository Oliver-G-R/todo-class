import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import * as ImagePicker from "expo-image-picker"
//assets
import camera from '../assets/cameraincon.png'

//helpers
import { uploadImage } from '../helpers/firebaseUpload'
import { storage } from '../db/firebaseInit'
export default function Form(props) {

    const initialState = {
        name: '',
        lastName: '',
        email: '',
        tel: '',
        subject: '',
        degree: '',
        group: ''
    }

    const [inputValue, setinputValue] = useState(initialState)

    const [image, setimage] = useState(null)

    const onChangeValueText = (value, name) =>
        setinputValue({ ...inputValue, [name]: value })

    const saveContact = () => {
        console.log(inputValue)
        setinputValue(initialState)
        props.navigation.navigate('Home')
    }

    const uploadImage = uri => {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.onerror = reject;
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    resolve(xhr.response);
                }
            };

            xhr.open("GET", uri);
            xhr.responseType = "blob";
            xhr.send();
        });
    };


    const openGallery = async () => {
        const responsePermissions = await ImagePicker.requestMediaLibraryPermissionsAsync()
        responsePermissions.granted === false
            && alert('Se requieren los permisos para acceder a sus fotos')

        const pickerResult = await ImagePicker.launchImageLibraryAsync()

        if (pickerResult.cancelled === true) return

        await setimage({ localURL: pickerResult.uri })



        uploadImage(pickerResult.uri)
            .then(resolve => {
                let ref = storage
                    .ref()
                    .child(`images/1`);
                ref
                    .put(resolve)
                    .then(resolve => {
                        console.log("Imagen subida correctamente");
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error);
            });


    }

    return (
        <>
            <ScrollView style={styles.container}>
                <TouchableOpacity onPress={() => openGallery()} >
                    <Image
                        source={{
                            uri: image !== null ? image.localURL
                                : 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
                        }}
                        style={styles.img}
                    />

                    <Text style={{ textAlign: 'center', marginBottom: 20, fontSize: 17 }}>
                        Foto
                    </Text>
                </TouchableOpacity>
                <View style={styles.inputGroup}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre"
                        value={inputValue.name}
                        onChangeText={(value) => onChangeValueText(value, 'name')}
                    />
                </View>


                <View style={styles.inputGroup}>
                    <TextInput
                        style={styles.input}
                        placeholder="Apelldio"
                        value={inputValue.lastName}
                        onChangeText={(value) => onChangeValueText(value, 'lastName')}
                    />
                </View>

                <View style={styles.inputGroup}>
                    <TextInput
                        style={styles.input}
                        placeholder="Correo"
                        value={inputValue.email}
                        onChangeText={(value) => onChangeValueText(value, 'email')}
                    />
                </View>

                <View style={styles.inputGroup}>
                    <TextInput
                        style={styles.input}
                        placeholder="Télefono"
                        value={inputValue.tel}
                        onChangeText={(value) => onChangeValueText(value, 'tel')}
                    />
                </View>

                {/* Group two */}
                <View style={styles.separator}></View>
                <Text style={styles.title}>
                    Extra
                </Text>

                <View style={styles.inputGroup}>
                    <TextInput
                        style={styles.input}
                        placeholder="Materia"
                        value={inputValue.subjet}
                        onChangeText={(value) => onChangeValueText(value, 'subjet')}
                    />
                </View>


                <View style={styles.inputGroup}>
                    <TextInput
                        style={styles.input}
                        placeholder="Grado"
                        value={inputValue.degree}
                        onChangeText={(value) => onChangeValueText(value, 'degree')}
                    />
                </View>

                <View style={styles.inputGroup}>
                    <TextInput
                        style={styles.input}
                        placeholder="Grupo"
                        value={inputValue.group}
                        onChangeText={(value) => onChangeValueText(value, 'group')}
                    />
                </View>


                <View>
                    {/* Button acces form */}
                    <TouchableOpacity onPress={() => saveContact()} style={styles.btnSaved} >

                        <View><Text style={styles.buttonText}>Guardar</Text></View>

                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20
    },

    title: {
        fontSize: 17,
        marginBottom: 10
    },

    inputGroup: {
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 5,

    },

    input: {
        padding: 10,
        color: '#626262'
    },

    img: {
        width: 75,
        height: 75,
        alignSelf: 'center',
        marginBottom: 10,
        borderRadius: 37.5,
    },

    separator: {
        height: 1,
        backgroundColor: '#707070',
        marginBottom: 10
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