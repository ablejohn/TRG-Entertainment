// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Add Authentication
import { getFirestore } from "firebase/firestore"; // Firestore
import { getStorage } from "firebase/storage"; // Storage
import { getAnalytics } from "firebase/analytics"; // Analytics (optional)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB020EneBDBpkidg0qdr1eAUfnG69lQJo",
  authDomain: "trg-ent.firebaseapp.com",
  projectId: "trg-ent",
  storageBucket: "trg-ent.firebasestorage.app", // Should be "trg-ent.appspot.com" (see note below)
  messagingSenderId: "241513022565",
  appId: "1:241513022565:web:2d58e72ca429643e98728c",
  measurementId: "G-8DCT8WZHZ3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Keep if you're using Analytics

// Initialize and export Authentication, Firestore, and Storage
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
