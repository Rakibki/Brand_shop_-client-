// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4tTYd37hH7OSJ9D2f0v1SFtghnIvREDs",
  authDomain: "brand-shop-project-d2bee.firebaseapp.com",
  projectId: "brand-shop-project-d2bee",
  storageBucket: "brand-shop-project-d2bee.appspot.com",
  messagingSenderId: "519288882956",
  appId: "1:519288882956:web:a6bd33f076cfcc5ed76b29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth