import React, { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/Form-input.component";
import "./sign-up.styles.scss"
import Button from "../button/Button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;
  // console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const onHandleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }

    try {
      // const response  = await createAuthUserWithEmailAndPassword(email,password);
      // console.log(response)
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use.");
      } else if (error.code === "auth/weak-password") {
        alert("Password should be at least 6 characters");
      } else {
        console.log("User creation encounter an error", error.message);
      }
    }
  };

  const onHandleChange = (event) => {
    // console.log(event);
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={onHandleSubmit}>
        {/* <label htmlFor="name">Display Name</label>
        <input
          type="text"
          autoComplete="off"
          onChange={onHandleChange}
          placeholder="Enter your name"
          required
          name="displayName"
          value={displayName}
        /> */}
        <FormInput
          label="Display Name"
          type="text"
          autoComplete="off"
          onChange={onHandleChange}
          // placeholder="Enter your name"
          required
          name="displayName"
          value={displayName}
        />
        {/* <label htmlFor="email">Email</label> */}
        <FormInput
          label="Email"
          type="email"
          onChange={onHandleChange}
          autoComplete="off"
          // placeholder="Enter your email"
          required
          name="email"
          value={email}
        />
        {/* <label htmlFor="password">Password</label> */}
        <FormInput
          label="Password"
          type="password"
          onChange={onHandleChange}
          autoComplete="off"
          // placeholder="Enter password"
          required
          name="password"
          value={password}
        />
        {/* <label htmlFor="password">Confirm Password</label> */}
        <FormInput
          label="Confirm Password"
          type="password"
          onChange={onHandleChange}
          autoComplete="off"
          // placeholder="Enter password"
          required
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
