// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from "firebase/firestore"

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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

const twitterProvider = new TwitterAuthProvider();
twitterProvider.setCustomParameters({
    prompt: "select_account",
  });

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithTwitterPopup= () => signInWithRedirect(auth,twitterProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth)=>{
  console.log(userAuth)
  const userDocRef = await doc(db,'users',userAuth.uid)
  console.log(userDocRef)

  const userSnapshot =  await getDoc(userDocRef);
  console.log(userSnapshot)
  console.log(userSnapshot.exists())
}