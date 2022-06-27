import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBPEe8FCE2ajyu8oMUG0SYFcAQamO5D9n4",
  authDomain: "ecom-sutt.firebaseapp.com",
  databaseURL: "https://ecom-sutt-default-rtdb.firebaseio.com",
  projectId: "ecom-sutt",
  storageBucket: "ecom-sutt.appspot.com",
  messagingSenderId: "700631776961",
  appId: "1:700631776961:web:21b830ec2d6480b9b49e40",
  measurementId: "G-SZ8TL0X3CH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };