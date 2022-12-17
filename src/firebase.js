/*****Store Firebase settings*****/
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfKx1mYJgUBbM9w5ZFKiwwCNXOuibudv0",
  authDomain: "ruoyewangpersonalwebsite.firebaseapp.com",
  projectId: "ruoyewangpersonalwebsite",
  storageBucket: "ruoyewangpersonalwebsite.appspot.com",
  messagingSenderId: "998063914792",
  appId: "1:998063914792:web:8008c47e192adc04549a1d",
  measurementId: "G-6SKCERJ4GH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore=getFirestore(app);