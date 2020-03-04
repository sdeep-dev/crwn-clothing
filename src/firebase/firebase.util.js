// base import for firebase
import firebase from "firebase/app";
// import for database
import "firebase/firestore";
// import for auth
import "firebase/auth";

// configuration object we obtained from firebase after setting
// up the project
const config = {
  apiKey: "AIzaSyC-SEs1fPAa_Y9qi2TBo11icY_g6ZFyUZA",
  authDomain: "crwn-db-86e52.firebaseapp.com",
  databaseURL: "https://crwn-db-86e52.firebaseio.com",
  projectId: "crwn-db-86e52",
  storageBucket: "crwn-db-86e52.appspot.com",
  messagingSenderId: "92009624912",
  appId: "1:92009624912:web:1045bae9a669be5957e855",
  measurementId: "G-E6BLS27QVZ"
};

// initialize the firebase app using the configuration object
firebase.initializeApp(config);

export const auth = firebase.auth(); 
export const firestore = firebase.firestore();

// JS object that provides google authentication
const provider = new firebase.auth.GoogleAuthProvider();
// prompts the user with google sign in popup
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;