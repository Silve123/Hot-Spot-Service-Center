import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDypTMsIaTBvJZ8zvYkUQclIiu2UCh8HwI",
  authDomain: "hot-spot-booking-app.firebaseapp.com",
  projectId: "hot-spot-booking-app",
  storageBucket: "hot-spot-booking-app.firebasestorage.app",
  messagingSenderId: "979651605262",
  appId: "1:979651605262:web:75332a4db0a37d7fb1dd5f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };