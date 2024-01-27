// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuSzS99CEHfUhSKwVOG3xWmWlA3G2aDHU",
  authDomain: "pratishta-f92f8.firebaseapp.com",
  projectId: "pratishta-f92f8",
  storageBucket: "pratishta-f92f8.appspot.com",
  messagingSenderId: "15979047899",
  appId: "1:15979047899:web:d7c3a2996d07977fb015fe",
  measurementId: "G-6GXXTL4C8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);