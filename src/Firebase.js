import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAFpR9hcKS9HE-MnyE0nHN220zc5jNZ2k",
  authDomain: "hotel-project-a0e1e.firebaseapp.com",
  projectId: "hotel-project-a0e1e",
  storageBucket: "hotel-project-a0e1e.appspot.com",
  messagingSenderId: "59523773067",
  appId: "1:59523773067:web:e0a6912a329bc0ebaeda8e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
