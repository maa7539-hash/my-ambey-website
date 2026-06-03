import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
  // Yahan apna Firebase Console wala config paste karna hai
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJuJ3BwICJ6_5yxKW3pO0QIE2MPo3no3s",
  authDomain: "ambey-tour-and-travels.firebaseapp.com",
  projectId: "ambey-tour-and-travels",
  storageBucket: "ambey-tour-and-travels.firebasestorage.app",
  messagingSenderId: "333428790576",
  appId: "1:333428790576:web:a88e19029cf073352264f5",
  measurementId: "G-543ZTCNEBS"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);