import SvgComponent from "../../asserts/crwnSvg";
import Carticon from "../carticon/Carticon";
import "./Header.scss";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <SvgComponent className="logo" />
        </div>
        <div className="options">
          <NavLink className="option" to="/shop">SHOP</NavLink>
          <NavLink className="option" to="/signin">SIGNIN</NavLink>
          <div className="option">CONTACT</div>
          <Carticon className="option" />
        </div>
      </div>
      <Outlet/>
    </>
  );
};

export default Header;
