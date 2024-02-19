// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ7tJDfK-5rsdSbMUwQc_5386Rb9UET3Y",
  authDomain: "for-the-festival.firebaseapp.com",
  projectId: "for-the-festival",
  storageBucket: "for-the-festival.appspot.com",
  messagingSenderId: "666658162164",
  appId: "1:666658162164:web:1de1e4aead38b6ee60e5a1",
  measurementId: "G-R2WCKZPRBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
