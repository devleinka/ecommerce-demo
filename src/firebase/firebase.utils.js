import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB_tXU03IN59Z6YP0rud6ey9Mu9-30-C64",
    authDomain: "ecommerce-demo-db-73c9b.firebaseapp.com",
    databaseURL: "https://ecommerce-demo-db-73c9b.firebaseio.com",
    projectId: "ecommerce-demo-db-73c9b",
    storageBucket: "ecommerce-demo-db-73c9b.appspot.com",
    messagingSenderId: "1093260398530",
    appId: "1:1093260398530:web:ad12428df8f8d5f99fd05b"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
