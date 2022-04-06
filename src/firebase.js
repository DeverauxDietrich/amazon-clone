import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDtvKln4i42RI35eugNBMWLmr4_9WY6tlc",
    authDomain: "clone-94bcd.firebaseapp.com",
    projectId: "clone-94bcd",
    storageBucket: "clone-94bcd.appspot.com",
    messagingSenderId: "1081074766630",
    appId: "1:1081074766630:web:3e503b315a3507b42067e7",
    measurementId: "G-LSL5FXHMSL"
});

const auth = firebase.auth();

export { auth };