// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4-xWpI1QgxbfW-bdjH8bpT37g9-rJgzk",
  authDomain: "facebook-clone-8c17d.firebaseapp.com",
  projectId: "facebook-clone-8c17d",
  storageBucket: "facebook-clone-8c17d.appspot.com",
  messagingSenderId: "1033405350995",
  appId: "1:1033405350995:web:a913d5d035b4b8fe06b2a6",
  measurementId: "G-M1R15797TZ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


  const db = getFirestore(firebaseApp);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  
  export {auth,provider,signInWithPopup};
  export default db;
