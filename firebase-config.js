// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBk0F3VmPv1lSgFX5j3gomHHhXqlTMZ1Kc",
  authDomain: "sk-bhai-babee.firebaseapp.com",
  databaseURL: "https://sk-bhai-babee-default-rtdb.firebaseio.com",
  projectId: "sk-bhai-babee",
  storageBucket: "sk-bhai-babee.firebasestorage.app",
  messagingSenderId: "921899190940",
  appId: "1:921899190940:web:5571144a413a458829fb59",
  measurementId: "G-HSL5YW918L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };