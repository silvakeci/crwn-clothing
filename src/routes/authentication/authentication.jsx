import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/fireBase";
import SignUp from "../../Component/sign-up/sign-up";
import SignIn from "../../Component/sign-in/sign-in";

const Authentication = () => {


  return (
    <div>
      <h1>Sign in</h1>
      <SignIn/>
      <SignUp/>

    </div>
  );
};

export default Authentication;
