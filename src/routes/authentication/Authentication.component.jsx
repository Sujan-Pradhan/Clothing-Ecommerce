import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import "./authentication.styles.scss";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  //   signInWithTwitterPopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/signup-form/Sign-up-form.component";

import SignIn from "../../components/signin-form/SignIn-form.component";

const Authentication = () => {
  useEffect(() => {
    const signGoogleRedirect = async () => {
      const response = await getRedirectResult(auth);
      //   console.log(response);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    };
    signGoogleRedirect();
  }, []);
  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   // const response = await signInWithGooglePopup();
  //   // console.log(response)
  //  const userDocRef =  await createUserDocumentFromAuth(user);
  // };

  //   const logTwitterUser = async () => {
  //     const response = await signInWithTwitterPopup();
  //     console.log(response);
  //   };
  return (
    <>
      <div className="authentication-container">
        {/* <h1>Sign In Page</h1> */}
        {/* <button onClick={logGoogleUser}>Sign in with Google Popup</button>{" "}
        <button onClick={signInWithGoogleRedirect}>
          Sign in with Google Redirect
        </button>
        <br /> */}
        {/* <button onClick={logTwitterUser}>Sign in with Twitter Popup</button> */}
        <SignIn />
        <SignUpForm />
      </div>
    </>
  );
};

export default Authentication;
