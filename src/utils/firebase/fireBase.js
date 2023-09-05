import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw9s_dcS1qd9999mrZQHZ42-4uEBPCOAo",
  authDomain: "crwn-clothing-db-5083c.firebaseapp.com",
  projectId: "crwn-clothing-db-5083c",
  storageBucket: "crwn-clothing-db-5083c.appspot.com",
  messagingSenderId: "476153058091",
  appId: "1:476153058091:web:7322dfbb05c665034f6b6e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
