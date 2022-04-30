
import { initializeApp } from "firebase/app";
import {getAuth, } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCr8oBJPD1iYnkuGdCoP_F7Cx1BdUq0II8",
  authDomain: "task-manager-32033.firebaseapp.com",
  projectId: "task-manager-32033",
  storageBucket: "task-manager-32033.appspot.com",
  messagingSenderId: "1014471806297",
  appId: "1:1014471806297:web:776117b59b1ee011559048",
  measurementId: "G-5JPDV6FLES"
};


const app = initializeApp(firebaseConfig);
export default app
export const firestore = getFirestore()
export const auth = getAuth();