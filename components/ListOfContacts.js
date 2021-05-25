import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
//hooks
import { useFetchContacts } from '../hooks/useFetchContacts'

//utils
import { getColorTypeMail, getFristLetter, getTypeMail } from '../utils/utilsUser'

export default function ListOfContacts({ navigation, textSearch }) {

    const [contacts] = useFetchContacts()

    const filterData = () => {
        if(textSearch !== ""){
            const filterContacts = contacts.filter(c => {
                return  Object.values(c)
                    .join(" ")
                    .toLowerCase()
                    .includes(textSearch.toLowerCase())
            })

            return filterContacts
        }
        return contacts
    }

    const navigateDetails = (id, colorEmail) =>
        navigation.navigate('contact-deatils', { contactId: id, colorEmail })


    const renderTypeEmial = (item) =>
        <View style={[{ backgroundColor: getColorTypeMail(item.email) }, styles.typeMailContainer]}>
            <Text style={styles.typeMail}>
                {getTypeMail(item.email)}
            </Text>
        </View>


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

                    {item.email !== '' && renderTypeEmial(item)}
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
             showsVerticalScrollIndicator={false}
             showsHorizontalScrollIndicator={false}
                data={filterData()}
                renderItem={renderItemContact}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        height: '100%',
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        paddingLeft: 10,
        overflow:'hidden',
        backgroundColor: "#f2f2f2"

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
        width: '50%',
        lineHeight: 20
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