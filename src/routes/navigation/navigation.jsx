import { Fragment, useContext} from "react";
import { Outlet} from "react-router-dom";
import "./navigationStyle";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/userContext";
import { signOutUser } from "../../utils/firebase/fireBase";
import CartIcon from "../../Component/cardIcon/cartIcon";
import CartDropdown from "../../Component/cartDropdown/cartDropdown";
import { CartContext } from "../../contexts/cartContext";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './navigationStyle';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
      <Fragment>
        <NavigationContainer>
          <LogoContainer to='/'>
            <CrwnLogo className='logo' />
          </LogoContainer>
          <NavLinks>
            <NavLink to='/shop'>SHOP</NavLink>

            {currentUser ? (
                <NavLink as='span' onClick={signOutUser}>
                  SIGN OUT
                </NavLink>
            ) : (
                <NavLink to='/auth'>SIGN IN</NavLink>
            )}
            <CartIcon />
          </NavLinks>
          {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
  );
};

export default Navigation;
