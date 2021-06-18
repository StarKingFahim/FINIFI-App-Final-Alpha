import * as firebase from 'firebase';
require('@firebase/firestore');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDKHtAJDhxDitRsYYHwr1x4b-_FedsOTCw",
  authDomain: "finifi-c9127.firebaseapp.com",
  projectId: "finifi-c9127",
  storageBucket: "finifi-c9127.appspot.com",
  messagingSenderId: "888676107974",
  appId: "1:888676107974:web:e08f789fe240ca7100f9c7",
  measurementId: "G-8K3JHBJ2MY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
