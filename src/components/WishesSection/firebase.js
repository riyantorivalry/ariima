// This config uses firebase compatibility mode
import 'firebase/compat/firestore'
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp8MtxnvuP2WLvM2xG6SP6b3zt7L5SZNo",
  authDomain: "ariima-wedding.firebaseapp.com",
  projectId: "ariima-wedding",
  storageBucket: "ariima-wedding.appspot.com",
  messagingSenderId: "363096803080",
  appId: "1:363096803080:web:efddae42b812dc1d82cebd",
  measurementId: "G-8MW4PLRDCV"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;