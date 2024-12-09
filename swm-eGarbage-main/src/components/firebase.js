// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyBloghfhFwhEc4r9qdOTel7CnJ6iz7m9k0",
  authDomain: "smart-bin-b30d2.firebaseapp.com",
  databaseURL: "https://smart-bin-b30d2-default-rtdb.firebaseio.com",
  projectId: "smart-bin-b30d2",
  storageBucket: "smart-bin-b30d2.firebasestorage.app",
  messagingSenderId: "23174065932",
  appId: "1:23174065932:web:2c546fe56c7d9bcc412329",
  measurementId: "G-ED76D79XWV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const database = getDatabase(app);
