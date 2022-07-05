// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "react-firebase-hooks";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8GQVOis-ifjbgaKq0nq26gM5X9l-aU7Y",
  authDomain: "kaitind-restauran.firebaseapp.com",
  projectId: "kaitind-restauran",
  storageBucket: "kaitind-restauran.appspot.com",
  messagingSenderId: "472838258178",
  appId: "1:472838258178:web:47446a85fb782bf86e311b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
