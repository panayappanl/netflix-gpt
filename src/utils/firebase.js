// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmOienW2O3JXfKI3dViVN5402WhcbblaQ",
  authDomain: "netflixgpt-94861.firebaseapp.com",
  projectId: "netflixgpt-94861",
  storageBucket: "netflixgpt-94861.firebasestorage.app",
  messagingSenderId: "212970030512",
  appId: "1:212970030512:web:979cdd543c9fddb5ee0275",
  measurementId: "G-KEF3YSC4NK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
