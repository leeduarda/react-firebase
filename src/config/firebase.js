// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7aHRmVQiM4hKE8pD8j-BGHILA0Uisw08",
  authDomain: "app-fatec-612b5.firebaseapp.com",
  projectId: "app-fatec-612b5",
  storageBucket: "app-fatec-612b5.appspot.com",
  messagingSenderId: "116980570155",
  appId: "1:116980570155:web:1cf7c27a66f18a4269326e",
  measurementId: "G-P4KEXPLKPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);