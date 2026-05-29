// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfHk2dzxd-Q0AKBz6ww49xlY0NqTXPsro",
  authDomain: "nutrary-1fa2a.firebaseapp.com",
  projectId: "nutrary-1fa2a",
  storageBucket: "nutrary-1fa2a.firebasestorage.app",
  messagingSenderId: "323171629464",
  appId: "1:323171629464:web:a1185d62e9e363882613ed",
  measurementId: "G-9R8HMCVGLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);