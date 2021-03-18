import { db } from '../db/firebaseInit'

const createRandomColor = () => {
    const randomColor = "#000000".replace(/0/g, () => (~~(Math.random() * 16)).toString(16));
    return randomColor
}

const saveContactFB = async (inputValues) => {
    const {
        name
    } = inputValues

    if (name === "") {
        alert("Agrega un nombre");
    } else {

        try {
            await db.collection("contacts").add({ ...inputValues, colorContact: createRandomColor() });
        } catch (error) {
            console.log(error)
        }
    }
}

const getContactById = async (id) => {
    const dbRef = db.collection("contacts").doc(id);
    const doc = await dbRef.get();
    const contact = doc.data();
    return { ...contact, id: doc.id }
};

export {
    saveContactFB,
    getContactById
}