import firebase from "firebase"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyD0znRHi3IGfiNt73_edQ1dHlYtxAqjG9g",
    authDomain: "todo-cla.firebaseapp.com",
    projectId: "todo-cla",
    storageBucket: "todo-cla.appspot.com",
    messagingSenderId: "983121601442",
    appId: "1:983121601442:web:574f60f3ca57f19a2cc8fb",
    measurementId: "G-HYZV1ZHKB1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
export {
    db
}