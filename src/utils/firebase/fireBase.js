import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch } from "firebase/firestore";

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

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd)=>{
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db);

  objectsToAdd.forEach((object)=>{
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  });
  await batch.commit();
  console.log('done')
}

export const createUserDocumentFromAuth = async (
  useAuth,
  additionalInfo = {}
) => {
  if (!useAuth) return;

  const userDocRef = doc(db, "users", useAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userDocRef.exists) {
    const { displayName, email } = useAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async ()=> await signOut(auth)

export const onAuthStateChangedListener =(callback)=>{
  onAuthStateChanged(auth, callback)
}
