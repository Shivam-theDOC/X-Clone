import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

//Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCA1ExLisn5XwUo5AkLAnWhiMFJPB31pYU",
  authDomain: "x-clone-a832d.firebaseapp.com",
  projectId: "x-clone-a832d",
  storageBucket: "x-clone-a832d.firebasestorage.app",
  messagingSenderId: "1014395772989",
  appId: "1:1014395772989:web:c73ae0e8252544b8fb8a54",
  measurementId: "G-Q2QY8MEJ6J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
