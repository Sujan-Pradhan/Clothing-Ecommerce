// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  TwitterAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnD4lBUauHkmR-NrCJjFjjp8qpqNGfgh8",
  authDomain: "clothing-ecommerce-db-211cd.firebaseapp.com",
  projectId: "clothing-ecommerce-db-211cd",
  storageBucket: "clothing-ecommerce-db-211cd.appspot.com",
  messagingSenderId: "844846162816",
  appId: "1:844846162816:web:f023601c7a317180715765",
  measurementId: "G-0D09CCW2H8",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

// const twitterProvider = new TwitterAuthProvider();
// twitterProvider.setCustomParameters({
//   prompt: "select_account",
// });

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// export const signInWithTwitterPopup = () =>
//   signInWithPopup(auth, twitterProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
  // console.log(userAuth);
  if (!userAuth) return;
  const userDocRef = await doc(db, "users", userAuth.uid);
  // console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());

  // if user data does not exist
  // create / set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }

  // if user data exists
  // return userDocRef
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email,password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
};
