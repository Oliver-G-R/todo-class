import { db } from '../db/firebaseInit'

const saveContactFB = async (inputValues) => {
    const {
        name
    } = inputValues

    if (name === "") {
        alert("Agrega un nombre");
    } else {

        try {
            await db.collection("contacts").add(inputValues);
        } catch (error) {
            console.log(error)
        }
    }
}

export {
    saveContactFB,
}