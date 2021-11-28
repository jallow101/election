// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8HXciNPPzltWiqCykMSz4yDHVF6j_TYI",
  authDomain: "election-gm.firebaseapp.com",
  projectId: "election-gm",
  storageBucket: "election-gm.appspot.com",
  messagingSenderId: "240048717987",
  appId: "1:240048717987:web:c03187550c455b5761ff16",
  measurementId: "G-928PMDK2L2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);