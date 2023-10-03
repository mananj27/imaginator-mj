// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD903rtZicAnJF1QUmg6d71knK6hUKLRlg",
  authDomain: "imaginator-53aa0.firebaseapp.com",
  projectId: "imaginator-53aa0",
  storageBucket: "imaginator-53aa0.appspot.com",
  messagingSenderId: "980149220100",
  appId: "1:980149220100:web:3553fa871e7776e5665651",
  measurementId: "G-T6864V3VRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth = getAuth(app)
const Provider = new GoogleAuthProvider()
const db = getFirestore(app)
const storage = getStorage(app)
const API_TOKEN = "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"

export {Auth, Provider, db, storage, API_TOKEN};