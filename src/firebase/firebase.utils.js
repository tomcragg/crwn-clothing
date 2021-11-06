import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDwTiqgmApcP2kMXHphRwqT5MAzef63MJM",
  authDomain: "crwn-db-15ba3.firebaseapp.com",
  projectId: "crwn-db-15ba3",
  storageBucket: "crwn-db-15ba3.appspot.com",
  messagingSenderId: "907121198084",
  appId: "1:907121198084:web:7da7810ef749f975636151"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

