// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCFwf_Ewpsh5uK7dGrOTYcCtkbiJRPlXQ0",
    authDomain: "redxmas-dc5b5.firebaseapp.com",
    projectId: "redxmas-dc5b5",
    storageBucket: "redxmas-dc5b5.appspot.com",
    messagingSenderId: "531616256480",
    appId: "1:531616256480:web:ef9c3ba7c4b4da15991b85",
    measurementId: "G-Z235V4HC2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };