// Import The functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg_9AX7jlf8RQ11HHdMRQWBBQG0P74sdA",
  authDomain: "auth-firebase-context-ta-9a0ed.firebaseapp.com",
  projectId: "auth-firebase-context-ta-9a0ed",
  storageBucket: "auth-firebase-context-ta-9a0ed.appspot.com",
  messagingSenderId: "9298232811",
  appId: "1:9298232811:web:65c779e3c8d32a441585ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Cloud Firestore
export const db = getFirestore(app);

export default app;
