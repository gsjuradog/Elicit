import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
// if request.auth != null; use in rules
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: '',
  authDomain: 'elicit-9d.firebaseapp.com',
  projectId: 'elicit-9d',
  storageBucket: 'elicit-9d.appspot.com',
  messagingSenderId: '6983795',
  appId: '1:698379837235:web:2e1',
  measurementId: 'G-KBWYS',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const dbFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, dbFirestore, timestamp };
