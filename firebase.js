import firebase from "firebase"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD1POWg8gtYvMTQvYjsaH2NcLctBZ8A1E0",
  authDomain: "netflix-6fb96.firebaseapp.com",
  projectId: "netflix-6fb96",
  storageBucket: "netflix-6fb96.appspot.com",
  messagingSenderId: "335194144845",
  appId: "1:335194144845:web:de984d8bd1766a4435dc04",
  measurementId: "G-8KFTCQ47DB"
};

let App
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };