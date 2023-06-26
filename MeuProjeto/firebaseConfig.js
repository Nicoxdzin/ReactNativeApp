// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfjiKAj5D9WbGz-ZHrtdwYt9EqQBjb0y0",
  authDomain: "meuprojeto-18ff5.firebaseapp.com",
  projectId: "meuprojeto-18ff5",
  storageBucket: "meuprojeto-18ff5.appspot.com",
  messagingSenderId: "334782057803",
  appId: "1:334782057803:web:bf80e1039e97974648ecce",
  measurementId: "G-Q0H4HYK8HX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;