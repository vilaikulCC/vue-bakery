// // import firebase from 'firebase/app'
// // import 'firebase/firestore'
// // import 'firebase/auth'

// // const db = firebase.initializeApp({ projectId: 'bakery-shop-c639b' }).firestore()
// import Vue from "vue";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB6uoNEyzm_I7oAi-4LKVPdkBt5eABSA8E",
//   authDomain: "bakery-shop-c639b.firebaseapp.com",
//   databaseURL:
//     "https://bakery-shop-c639b-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "bakery-shop-c639b",
//   storageBucket: "bakery-shop-c639b.appspot.com",
//   messagingSenderId: "435809570364",
//   appId: "1:435809570364:web:e130d83c233e5af8a6bd39",
//   measurementId: "G-TZYBGB1DV5",
// };

// // // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const db = getFirestore();

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/analytics";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6uoNEyzm_I7oAi-4LKVPdkBt5eABSA8E",
  authDomain: "bakery-shop-c639b.firebaseapp.com",
  databaseURL:
    "https://bakery-shop-c639b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bakery-shop-c639b",
  storageBucket: "bakery-shop-c639b.appspot.com",
  messagingSenderId: "435809570364",
  appId: "1:435809570364:web:e130d83c233e5af8a6bd39",
  measurementId: "G-TZYBGB1DV5",
};

// Get a Firestore instance
export const db = firebase.initializeApp(firebaseConfig).firestore();
export default firebase;
// const db = firebase.firestore();
