// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  updateDoc,
  arrayUnion,
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyD16jaO_klCZctnf-RrKk3WRTDgeVG5HG0",
	authDomain: "poker-balance-a8557.firebaseapp.com",
	projectId: "poker-balance-a8557",
	storageBucket: "poker-balance-a8557.firebasestorage.app",
	messagingSenderId: "889473757428",
	appId: "1:889473757428:web:23e85033b290000b3a6ea1",
	measurementId: "G-RVHGXLLJVW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export Firebase instances and functions
export { db, collection, doc, setDoc, getDoc, onSnapshot, updateDoc, arrayUnion };
