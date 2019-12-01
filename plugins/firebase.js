import firebase from 'firebase/app'
require('firebase/auth')
require('firebase/firestore')
require('firebase/storage')

const firebaseConfig = {
    apiKey: "AIzaSyA6N3dnD1rmaQ1E_QO2L5Buv1vTjEVvbxA",
    authDomain: "nuxt-crud-70128.firebaseapp.com",
    databaseURL: "https://nuxt-crud-70128.firebaseio.com",
    projectId: "nuxt-crud-70128",
    storageBucket: "nuxt-crud-70128.appspot.com",
    messagingSenderId: "101195570970",
    appId: "1:101195570970:web:8164e47f3f781fe39fd6a3"
}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { firebase, db, auth, storage }