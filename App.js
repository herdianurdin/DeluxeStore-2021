import React from 'react'
import Router from './router'
import firebase from 'firebase/app'
import firebaseConfig from './config'

if (!firebase.apps.lenght) {
    firebase.initializeApp(firebaseConfig)
}

export default function App() {
    return <Router />
}
