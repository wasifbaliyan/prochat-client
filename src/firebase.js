import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_KEY,
  authDomain: "prochat-server.firebaseapp.com",
  projectId: "prochat-server",
  storageBucket: "prochat-server.appspot.com",
  messagingSenderId: "1088518266556",
  appId: "1:1088518266556:web:b1c66575820ef5f35abab9",
  measurementId: "G-21BHW6WXX5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
