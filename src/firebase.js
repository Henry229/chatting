import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAt95SSmW_klAU86iaM0C9msE5nlnDPYF8",
    authDomain: "chattingwithfirebase-2426b.firebaseapp.com",
    projectId: "chattingwithfirebase-2426b",
    storageBucket: "chattingwithfirebase-2426b.appspot.com",
    messagingSenderId: "917990990870",
    appId: "1:917990990870:web:0f04b373c5972f1e0fc137",
    measurementId: "G-ET8413XJRY"
    })

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }