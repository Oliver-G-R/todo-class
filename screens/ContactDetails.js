import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
//helpers
import { getContactById } from '../helpers/firebaseUpload'

export default function ContactDetails(props) {
    const [contactInfo, setContactInfo] = useState({})

    useEffect(() => {
        getContactById(props.route.params.contactId)
            .then(contact => {
                setContactInfo(contact)
            })
    }, [])


    return (
        <View>
            <Text>{contactInfo.name}</Text>
        </View>
    )
}
