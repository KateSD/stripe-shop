// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDC-Z-0xAWlVHKHDOEnThqLZw4X13s_Q38",
    authDomain: "challenge-e2b6e.firebaseapp.com",
    projectId: "challenge-e2b6e",
    storageBucket: "challenge-e2b6e.appspot.com",
    messagingSenderId: "582592475545",
    appId: "1:582592475545:web:16d820707d05f1a859e308",
    measurementId: "G-NH8TGHS99X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};
