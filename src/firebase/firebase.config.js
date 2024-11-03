// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF9pOKjCogWD2cDMucSdQ_f9VHwGzYfqc",
  authDomain: "user-email-password-auth-8b321.firebaseapp.com",
  projectId: "user-email-password-auth-8b321",
  storageBucket: "user-email-password-auth-8b321.firebasestorage.app",
  messagingSenderId: "269663284509",
  appId: "1:269663284509:web:7e555d9cce1a6c9b7705f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;