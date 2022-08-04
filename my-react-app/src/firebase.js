// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvxn683pDtuXgLWOSO5-FXNE-JlH5-kJk",
  authDomain: "reacttest-b81de.firebaseapp.com",
  projectId: "reacttest-b81de",
  storageBucket: "reacttest-b81de.appspot.com",
  messagingSenderId: "750592063067",
  appId: "1:750592063067:web:63e25e96ca7213626db17e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);