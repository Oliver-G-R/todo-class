import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
//helpers
import { getContactById } from '../helpers/firebaseUpload'
import { getFristLetter } from '../utils/utilsUser'

export default function ContactDetails(props) {
    const [contactInfo, setContactInfo] = useState({})

    useEffect(() => {
        getContactById(props.route.params.contactId)
            .then(contact => {
                setContactInfo(contact)
            })
    }, [])




    return (
        <View style={styles.container}>

            {/* TODO:  Crear la visa de detalle*/}
            <View style={styles.contentContact}>
                <View style={[{ backgroundColor: contactInfo.colorContact ? contactInfo.colorContact : '#fff' }, styles.roundContact]}>
                    <Text style={styles.textRound}>
                        {getFristLetter(contactInfo.name ? contactInfo.name : 'S')}
                    </Text>
                </View>

                <Text style={styles.name}>
                    {contactInfo.name} {contactInfo.lastName}
                </Text>

                <View style={styles.separator}></View>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 20,
        alignItems: 'center',
        backgroundColor: '#FFFF'
    },
    roundContact: {
        height: 110,
        width: 110,
        borderRadius: 55,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textRound: {
        fontWeight: 'bold',
        fontSize: 40,
        color: '#fff'
    },

    /* Contenido del contacto */
    contentContact: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    name: {
        color: '#000',
        fontSize: 20,
        marginTop: 20,

    },
    separator: {
        borderWidth: 1,
        borderColor: '#EAEAEA',
        marginTop: 20,
        width: 300
    }

})