import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPVGf_JWPEUBlHXueLcjwyIm715AVZG7I",
  authDomain: "destiny-bank.firebaseapp.com",
  projectId: "destiny-bank",
  storageBucket: "destiny-bank.firebasestorage.app",
  messagingSenderId: "574730196994",
  appId: "1:574730196994:web:bd7766c624ea9dfdad6f1b",
  measurementId: "G-M2TWYDTCNE",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)