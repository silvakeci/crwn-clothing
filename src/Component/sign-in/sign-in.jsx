import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/fireBase";
import FormInput from "../form-input/form-input";
import "./sign-in.scss";
import Button from "../button/button";

const defaultFormFields = {
  email: "",
  password: "",

};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
const response = await signInAuthUserWithEmailAndPassword(email, password)
      console.log(response)
      resetFormFields();
    } catch (error) {
      if (error === 'auth/wrong-password'){
        alert('incorrect password')
      }
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign Up with email and password</span>
      <form onSubmit={handleSubmit}>

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" onClick={signInWithGoogle}>Google Sign In </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
