// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Add Firestore
import { getStorage } from "firebase/storage"; // Add Storage
import { getAnalytics } from "firebase/analytics"; // Keep Analytics if you want it

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB020EneBDBpkidg0qdr1eAUfnG69lQJo",
  authDomain: "trg-ent.firebaseapp.com",
  projectId: "trg-ent",
  storageBucket: "trg-ent.firebasestorage.app", // Note: this should typically be "trg-ent.appspot.com"
  messagingSenderId: "241513022565",
  appId: "1:241513022565:web:2d58e72ca429643e98728c",
  measurementId: "G-8DCT8WZHZ3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Keep this if you're using Analytics

// Initialize and export Firestore and Storage
export const db = getFirestore(app);
export const storage = getStorage(app);
