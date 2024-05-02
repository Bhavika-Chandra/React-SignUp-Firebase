import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZtn36tunakQPBoDsiSU11t4BuVHpVqPY",
  authDomain: "signupflow-80a69.firebaseapp.com",
  projectId: "signupflow-80a69",
  storageBucket: "signupflow-80a69.appspot.com",
  messagingSenderId: "729579468902",
  appId: "1:729579468902:web:3d6c2cc5b77e3558dcd5a7",
  measurementId: "G-XVN8R08TNF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth };