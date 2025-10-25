// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,

  authDomain: "lmslogin-261be.firebaseapp.com",
  projectId: "lmslogin-261be",
  storageBucket: "lmslogin-261be.firebasestorage.app",
  messagingSenderId: "510248053129",
  appId: "1:510248053129:web:ddf24796ae96de36dfd958"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {auth , provider}