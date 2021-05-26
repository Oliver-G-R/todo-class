import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Linking, Share } from 'react-native'

import { Icon } from 'react-native-elements'

import { TouchableOpacity } from 'react-native-gesture-handler'
//helpers
import { deleteContact, getContactById } from '../helpers/firebaseUpload'

//utils
import { getColorTypeMail, getFristLetter, validShareData } from '../utils/utilsUser'

//components
import ButtonOpenForm from '../components/ButtonOpenForm'
import { Alert } from 'react-native'

export default function ContactDetails(props) {
    const [contactInfo, setContactInfo] = useState({})

    /* Resuleve el error de actaulización inmediata al cargar el componente */
    useEffect(() => {
        let mounted = true;

        getContactById(props.route.params.contactId)
            .then(contact => {
                mounted && setContactInfo(contact)
            })

        return () => mounted = false;
    }, [contactInfo])

    const renderIcon = (name, type, color) => <Icon
        name={name}
        type={type}
        color={color}
    />

    const renderContentEmail = () =>
        <TouchableOpacity
            style={[{ backgroundColor: getColorTypeMail(contactInfo.email) }, styles.contentEmail]}
            onPress={() => Linking.openURL(`mailto:${contactInfo.email}`)}>
            <Text style={styles.email}>
                {contactInfo.email}
            </Text>
        </TouchableOpacity>


    const renderAllInfo = () => {
        return (
            <View style={styles.contentAllInfo}>
                {/* Teléfono */}
                <TouchableOpacity onPress={() => contactInfo.tel !== '' && contactInfo.tel.length >= 10 &&
                    Linking.openURL(`tel:${contactInfo.tel}`)} style={styles.contentRow}>

                    {renderIcon('phone-alt', 'font-awesome-5', '#5D5D5D')}

                    <Text style={[{ letterSpacing: 2 }, styles.infoAllContact]}>
                        {contactInfo.tel !== '' && contactInfo.tel !== undefined ? contactInfo.tel : 'Sin Número'}
                    </Text>
                </TouchableOpacity>
                {/* Materia */}
                <View style={styles.contentRow}>

                    {renderIcon('address-book', 'font-awesome-5', '#5D5D5D')}
                    <Text style={styles.infoAllContact}>
                        {contactInfo.subject !== '' && contactInfo.subject !== undefined ? contactInfo.subject : 'Sin Materia'}
                    </Text>
                </View>
                {/* Grupo */}
                <View style={styles.contentRow}>

                    {renderIcon('users', 'font-awesome-5', '#5D5D5D')}
                    <Text style={[{
                        textTransform: contactInfo.group !== '' && contactInfo.group !== undefined
                            ? 'uppercase' : 'capitalize'
                    }, styles.infoAllContact]}>
                        {contactInfo.group !== '' && contactInfo.group !== undefined ? `"${contactInfo.group}"` : 'Sin Grupo'}
                    </Text>
                </View>
                {/* Grado */}
                <View style={styles.contentRow}>

                    {renderIcon('address-card', 'font-awesome-5', '#5D5D5D')}
                    <Text style={styles.infoAllContact}>
                        {contactInfo.degree !== '' && contactInfo.degree !== undefined ? contactInfo.degree : 'Sin Grado'}
                    </Text>
                </View>
                {/* Descripción */}
                <View style={styles.contentRow}>

                    {renderIcon('file-alt', 'font-awesome-5', '#5D5D5D')}
                    <Text style={styles.infoAllContact}>
                        {contactInfo.description !== '' && contactInfo.description !== undefined ? contactInfo.description : 'Sin una descripción'}
                    </Text>
                </View>
            </View>
        )
    }

    const confirmationRemove = () => {
        Alert.alert(
            "Elimnar Contacto",
            "Confirma para eliminar",
            [
                {
                    text: "Sí", onPress: () => {
                        deleteContact(contactInfo.id)
                        props.navigation.navigate('Home')
                    }
                },
            ],
            {
                cancelable: true,
            }
        );
    }

    const shareContact = async(contactInfo) => {
        const shareM = validShareData({...contactInfo})

        try {
            const result = await Share.share({
            message: shareM,
            });
            if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
            } else if (result.action === Share.dismissedAction) {
            // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
      
    }
    return (
        <View style={styles.container}>
            {/* Botón de borrar */}
            <View style={styles.viewbtnEnd}>
                <TouchableOpacity
                    onPress={confirmationRemove}
                    style={styles.containerDelete}>
                    {renderIcon('trash-alt', 'font-awesome-5', '#FFF')}
                </TouchableOpacity>
            </View>

            <View style={[styles.viewbtnEnd, styles.viewbtnEnd_share]}>
                <TouchableOpacity
                    onPress={() => shareContact(contactInfo)}
                    style={[styles.containerDelete, {backgroundColor: contactInfo.colorContact ? contactInfo.colorContact : '#1475E3' }]}>
                    {renderIcon('share', 'font-awesome-5', '#FFF')}
                </TouchableOpacity>
            </View>

            <View style={styles.contentContact}>
                <View style={[{ backgroundColor: contactInfo.colorContact ? contactInfo.colorContact : '#fff' }, styles.roundContact]}>
                    <Text style={styles.textRound}>
                        {getFristLetter(contactInfo.name ? contactInfo.name : 'S')}
                    </Text>
                </View>

                <View style={styles.contentMailAndName}>
                    <Text style={styles.name}>
                        {contactInfo.name} {contactInfo.lastName}
                    </Text>
                    {
                        contactInfo.email !== '' && renderContentEmail()
                    }
                </View>

                <View style={styles.separator}></View>

                {renderAllInfo()}
            </View>
            <ButtonOpenForm
                navigation={props.navigation}
                currentID={contactInfo.id} />
        </View>
    )
}


const styles = StyleSheet.create({
    containerDelete: {
        backgroundColor: '#DA4C3F',
        borderRadius: 30,
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
    },

    viewbtnEnd: {
        zIndex: 1,
        position: 'absolute',
        bottom: 0,
        marginBottom: 100,
        right: 20,
    },

    viewbtnEnd_share: {
        marginBottom: 170,
    },

    container: {
        flex: 1,
        padding: 10,
        paddingTop: 20,
        alignItems: 'center',
        backgroundColor: '#FFFF'
    },
    roundContact: {
        height: 90,
        width: 90,
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textRound: {
        fontSize: 50,
        color: '#fff'

    },

    /* Contenido del contacto */
    contentContact: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    contentMailAndName: {
        marginTop: 20,
    },

    name: {
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 5

    },
    email: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    },

    contentEmail: {
        padding: 8,
        fontWeight: 'bold',
        borderRadius: 5
    },
    separator: {
        borderWidth: 1,
        borderColor: '#EAEAEA',
        marginTop: 20,
        width: 300
    },

    contentAllInfo: {
        marginTop: 20,
        width: 300
    },
    infoAllContact: {
        color: '#000',
        fontSize: 18,
        marginLeft: 25
    },
    contentRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    }

})