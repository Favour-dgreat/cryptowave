// src/firebase.config.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBt08anfNdg8gn72Wdlk17fUG3ederAHHY",
  authDomain: "cryptowavee-df519.firebaseapp.com",
  projectId: "cryptowavee-df519",
  storageBucket: "cryptowavee-df519.appspot.com",
  messagingSenderId: "626591191230",
  appId: "1:626591191230:web:4f96d86ed29ed883b74eef",
  measurementId: "G-BMBDTTP3EN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };