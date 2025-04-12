// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics , Analytics} from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZxzTp8qKVRD2kvfvGCyMPpsbIB_aEsXc",
  authDomain: "flaskapp-c46d9.firebaseapp.com",
  projectId: "flaskapp-c46d9",
  storageBucket: "flaskapp-c46d9.firebasestorage.app",
  messagingSenderId: "344592262712",
  appId: "1:344592262712:web:d1b6d52992d55fee4768cd",
  measurementId: "G-K1MYVXB5HJ"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const analytics: Analytics = getAnalytics(app);
const auth = getAuth(app);

// Export what you need
export  { app, analytics, auth };