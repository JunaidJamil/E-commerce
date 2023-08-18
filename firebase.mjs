import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAl1ia2SCONrzCwaMru9pTYT_MkuYw6t08",
  authDomain: "signup-dd96b.firebaseapp.com",
  databaseURL: "https://signup-dd96b-default-rtdb.firebaseio.com",
  projectId: "signup-dd96b",
  storageBucket: "signup-dd96b.appspot.com",
  messagingSenderId: "77269160744",
  appId: "1:77269160744:web:3a0aff55d4d82fcd7bb61d",
  measurementId: "G-V05ZWRJ28Z"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const  db = getFirestore(app);