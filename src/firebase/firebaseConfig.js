import { initializeApp } from "firebase/app";
import {GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDgF5QgTbCbQZE41TFtQbdLYnmtYQEc008",
  authDomain: "as-app-2d11a.firebaseapp.com",
  projectId: "as-app-2d11a",
  storageBucket: "as-app-2d11a.appspot.com",
  messagingSenderId: "758020700230",
  appId: "1:758020700230:web:e9f00d7b898d75143a3247"
};

const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const db = getFirestore();

export {
    app,
    google,
    db
}