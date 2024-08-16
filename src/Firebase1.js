import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVW-JoCFWnCSWIxLRrrZymvGtOY8r5wZ0",
  authDomain: "mainjs-c75b7.firebaseapp.com",
  projectId: "mainjs-c75b7",
  storageBucket: "mainjs-c75b7.appspot.com",
  messagingSenderId: "896349402454",
  appId: "1:896349402454:web:830c51d42074af3b74d2f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export { database };
