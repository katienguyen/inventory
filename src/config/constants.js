import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBpDjdAU5RYVEQ0wPV3SSewU6NXTjuBB0c",
    authDomain: "inventory-management-a9852.firebaseapp.com",
    databaseURL: "https://inventory-management-a9852.firebaseio.com",
    projectId: "inventory-management-a9852",
    storageBucket: "inventory-management-a9852.appspot.com",
    messagingSenderId: "863165380641"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth