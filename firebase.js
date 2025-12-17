// Tvoja Firebase konfiguracija
const firebaseConfig = {
  apiKey: "AIzaSyDv9-C_lLGKT1chMiehk43jzinNEkFtHog",
  authDomain: "study-app-c1158.firebaseapp.com",
  projectId: "study-app-c1158",
  storageBucket: "study-app-c1158.firebasestorage.app",
  messagingSenderId: "101963018302",
  appId: "1:101963018302:web:8f39c8be028d00bc10e16f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Kreiraj varijable za Auth i Firestore
const auth = firebase.auth();
const db = firebase.firestore();
