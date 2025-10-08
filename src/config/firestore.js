// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz93YSdoQgjOVm-XAdi0hZCkCdYd2vDRY",
  authDomain: "contact-me-portfolio-ec42d.firebaseapp.com",
  projectId: "contact-me-portfolio-ec42d",
  storageBucket: "contact-me-portfolio-ec42d.firebasestorage.app",
  messagingSenderId: "701953516411",
  appId: "1:701953516411:web:3ba024b348a6f5fe9dd3de",
  measurementId: "G-0E5L5Y0RB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

  
export default db;