import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { useFetchContacts } from '../hooks/useFetchContacts'

export default function ListOfContacts() {

    const [contacts] = useFetchContacts()

    const getFristLetter = name =>
        name.charAt(0).toUpperCase();

    const renderItemContact = ({ item }) => (
        <TouchableOpacity key={item.id} style={styles.itemList}>
            <View style={[{ backgroundColor: item.colorContact }, styles.roundItem]}>
                <Text style={styles.roundItemText}>{getFristLetter(item.name)}</Text>
            </View>
            <View>
                <Text style={styles.name}>
                    {item.name} {item.lastName}
                </Text>
                <Text style={styles.emial}>
                    {item.email}
                </Text>
            </View>

        </TouchableOpacity>
    )


    return (
        <View style={styles.content}>
            <FlatList
                data={contacts}
                renderItem={renderItemContact}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginTop: 50
    },

    itemList: {
        padding: 15,
        marginBottom: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        flexDirection: 'row',
    },

    roundItem: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',

    },

    name: {
        fontWeight: 'bold'
    },

    roundItemText: {
        color: '#fff',
        fontWeight: 'bold'
    }
})