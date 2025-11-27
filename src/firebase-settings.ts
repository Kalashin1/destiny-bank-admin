import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDAeKTBAFeY7T_3rAtYJRdlGJRQ0umFuA",
  authDomain: "bank-db88e.firebaseapp.com",
  projectId: "bank-db88e",
  storageBucket: "bank-db88e.firebasestorage.app",
  messagingSenderId: "613254241010",
  appId: "1:613254241010:web:d64722fb7007c8dc510e6b",
  measurementId: "G-5JL9WDHEV3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)