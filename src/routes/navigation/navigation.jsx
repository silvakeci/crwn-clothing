import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
