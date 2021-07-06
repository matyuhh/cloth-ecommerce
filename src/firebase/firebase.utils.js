import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCKzMcshKkv4yHQkpJ74ec6xu3kns1f4LY",
    authDomain: "cloth-ecommerce-db.firebaseapp.com",
    projectId: "cloth-ecommerce-db",
    storageBucket: "cloth-ecommerce-db.appspot.com",
    messagingSenderId: "751719297463",
    appId: "1:751719297463:web:3274a0ae28c187bd4cf832"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;