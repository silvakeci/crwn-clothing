import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/fireBase";
import SignUp from "../../Component/sign-up/sign-up";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
      <SignUp></SignUp>
    </div>
  );
};

export default SignIn;
