import firebase from 'firebase/app';
import 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyAuv09ygP67re-9b3SKLyKyWmPur68ey5g',
  authDomain: 'elicit-5039d.firebaseapp.com',
  projectId: 'elicit-5039d',
  storageBucket: 'elicit-5039d.appspot.com',
  messagingSenderId: '698379837235',
  appId: '1:698379837235:web:2e1bd830a420c094bc6846',
  measurementId: 'G-KBWY7EP07S',
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const db = fb.firestore();
