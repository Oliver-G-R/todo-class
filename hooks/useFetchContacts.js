import { useState, useEffect } from 'react'
import { db } from '../db/firebaseInit'

export const useFetchContacts = () => {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        db.collection("contacts").onSnapshot(qSnapshot => {
            const contactsFB = []
            qSnapshot.docs.forEach(doc => {
                contactsFB.push({ ...doc.data(), id: doc.id })
            })
            setContacts(contactsFB)
        })
    }, [])

    return [contacts]
}
