import './authentication.scss'
import SignUp from "../../Component/sign-up/sign-up";
import SignIn from "../../Component/sign-in/sign-in";

const Authentication = () => {
    return (
        <div className='authentication-container'>
            <SignIn />
            <SignUp/>
        </div>
    );
};

export default Authentication;
