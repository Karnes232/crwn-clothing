import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyChlQs6TKBmxc8D1yy8j0PT0Pf5U_CmOSU",
    authDomain: "crwn-db-ba6ba.firebaseapp.com",
    projectId: "crwn-db-ba6ba",
    storageBucket: "crwn-db-ba6ba.appspot.com",
    messagingSenderId: "213418357796",
    appId: "1:213418357796:web:c2cc8992b08aeb9c2cd4b1",
    measurementId: "G-1V196Y5R9J"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;