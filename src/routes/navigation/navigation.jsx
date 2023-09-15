import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import {UserContext} from "../../contexts/userContext";
import {signOutUser} from "../../utils/firebase/fireBase";

const Navigation = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext)
// console.log(currentUser)
const signOutHandler = async ()=>{
 await signOutUser();
 setCurrentUser(null)

}
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {
            currentUser ? (
                <span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>
            ):(<Link className="nav-link" to="/auth">
              Sign In
            </Link>)
          }
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
