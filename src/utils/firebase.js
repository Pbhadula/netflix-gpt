// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0J4e33BsekeJYolMzr-kn4G8jb-6_3uk",
  authDomain: "netflix-gpt-d42e9.firebaseapp.com",
  projectId: "netflix-gpt-d42e9",
  storageBucket: "netflix-gpt-d42e9.appspot.com",
  messagingSenderId: "1072535187384",
  appId: "1:1072535187384:web:296dce4ff68dce2d05694d",
  measurementId: "G-ZJR9RS6PSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();