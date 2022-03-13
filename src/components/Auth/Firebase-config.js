import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDWvD1kymdPolUevYtHiLcUYye3oWC9HHU",
    authDomain: "auth-7e412.firebaseapp.com",
    projectId: "auth-7e412",
    storageBucket: "auth-7e412.appspot.com",
    messagingSenderId: "66245208811",
    appId: "1:66245208811:web:ee60af81e40cf2432facae"
  };


  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);