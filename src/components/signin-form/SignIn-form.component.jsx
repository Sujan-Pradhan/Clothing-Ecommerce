import React, { useContext, useState } from "react";
import "./signin-form.styles.scss";
import Button, { BUTTON_TYPES_CLASSES } from "../button/Button.component";
import FormInput from "../form-input/Form-input.component";
import {
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  // const { setCurrentUser } = useContext(UserContext);

  const signInWithGoogle = async () => {
    // const { user } = await signInWithGooglePopup();
    await signInWithGooglePopup();
    // const response = await signInWithGooglePopup();
    // console.log(response)
    // setCurrentUser(user);
    // await createUserDocumentFromAuth(user);
  };

  const onHandleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);
      // console.log(user, "sujan");
      // setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("No user found!!");
          break;
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;

        default:
          console.log(error);
      }
      //   if (error.code === "auth/user-not-found") {
      //     alert("Please register first");
      //   }
      //   if (error.code === "auth/wrong-password") {
      //     alert("Incorrect password for email");
      //   }
      //   console.log(error);
    }
  };

  const onHandleChange = (event) => {
    const { name, value } = event.target;
    // console.log(value);
    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  return (
    <>
      <div className="sign-in-container">
        <h2>Already Have An Account?</h2>
        <span>Sign In With Email and Password</span>

        <form onSubmit={onHandleSubmit}>
          {/* <label htmlFor="email">Email</label> */}
          <FormInput
            label="Email"
            type="email"
            onChange={onHandleChange}
            required
            name="email"
            value={email}
          />
          {/* <label htmlFor="password">Password</label> */}
          <FormInput
            label="Password"
            type="password"
            onChange={onHandleChange}
            required
            name="password"
            value={password}
          />
          <div className="sign-in-button-container">
            <Button type="submit">Sign In</Button>
            <Button
              type="button"
              // buttonType="google"
              buttonType={BUTTON_TYPES_CLASSES.google}
              onClick={signInWithGoogle}
            >
              Google Sign In
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
