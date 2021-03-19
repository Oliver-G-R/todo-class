import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

//hooks
import { useFetchContacts } from '../hooks/useFetchContacts'

//utils
import { getFristLetter } from '../utils/utilsUser'

export default function ListOfContacts({ navigation }) {

    const [contacts] = useFetchContacts()


    const navigateDetails = id =>
        navigation.navigate('contact-deatils', { contactId: id })

    const getColorTypeMail = mail => {
        var tyMail = getTypeMail(mail).toLowerCase()

        let colorMail = ''

        switch (tyMail) {
            case 'gmail':
                colorMail = '#EA4335'
                break;
            case 'hotmail':
            case 'outlooks':
                colorMail = '#006DBF'
                break;
            case 'yahoo':
                colorMail = '#5F00CA'
                break;
            default:
                colorMail = '#C0C0C0'
                break;
        }

        return colorMail
    }

    const getTypeMail = mail => {
        var getInfoMail = /^([^]+)@(\w+).(\w+)$/.exec(mail);


        return getInfoMail ? getInfoMail[2].toUpperCase() : 'No Email'
    }


    const renderItemContact = ({ item }) => (
        <TouchableOpacity
            key={item.id}
            style={styles.itemList}
            onPress={() => navigateDetails(item.id)}
        >

            <View style={[{ backgroundColor: item.colorContact }, styles.roundItem]}>
                <Text style={styles.roundItemText}>{getFristLetter(item.name)}</Text>
            </View>

            <View style={styles.contentInfo}>
                <View style={styles.groupEmail}>
                    <Text style={styles.name}>
                        {item.name} {item.lastName}
                    </Text>
                    <View style={[{ backgroundColor: getColorTypeMail(item.email) }, styles.typeMailContainer]}>
                        <Text style={styles.typeMail}>
                            {getTypeMail(item.email)}
                        </Text>
                    </View>
                </View>
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
        height: '100%',

    },

    itemList: {
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        flexDirection: 'row',
    },

    roundItem: {
        height: 45,
        width: 45,
        borderRadius: 22.5,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',

    },

    contentInfo: {
        width: '80%'
    },

    name: {
        fontWeight: 'bold',
        width: '50%'
    },

    roundItemText: {
        color: '#fff',
        fontWeight: 'bold'
    },

    groupEmail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    typeMailContainer: {
        padding: 5,
        borderRadius: 4,
        height: 26
    },

    typeMail: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },

})