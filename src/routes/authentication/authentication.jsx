import SignUp from "../../Component/sign-up/sign-up";
import SignIn from "../../Component/sign-in/sign-in";

import { AuthenticationContainer } from './authenticationStyle';

const Authentication = () => {
    return (
        <AuthenticationContainer>
            <SignIn />
            <SignUp/>
        </AuthenticationContainer>
    );
};

export default Authentication;