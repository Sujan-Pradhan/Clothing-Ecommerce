import React, { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

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
    <div>
      <h1>Sign up with email and password</h1>
      <form onSubmit={onHandleSubmit}>
        <label htmlFor="name">Display Name</label>
        <input
          type="text"
          autoComplete="off"
          onChange={onHandleChange}
          placeholder="Enter your name"
          required
          name="displayName"
          value={displayName}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          onChange={onHandleChange}
          autoComplete="off"
          placeholder="Enter your email"
          required
          name="email"
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={onHandleChange}
          autoComplete="off"
          placeholder="Enter password"
          required
          name="password"
          value={password}
        />
        <label htmlFor="password">Confirm Password</label>
        <input
          type="password"
          onChange={onHandleChange}
          autoComplete="off"
          placeholder="Enter password"
          required
          name="confirmPassword"
          value={confirmPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
