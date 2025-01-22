import SvgComponent from "../../asserts/crwnSvg";
import Carticon from "../Carticon/Carticon";
import "./Header.scss";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <NavLink to="/">
        <div className="logo-container">
          <SvgComponent className="logo" />
        </div>
        </NavLink>
        <div className="options">
          <NavLink className="option" to="/shop">SHOP</NavLink>
          <NavLink className="option" to="/auth">SIGNIN</NavLink>
          <div className="option">CONTACT</div>
          <Carticon className="option" />
        </div>
      </div>
      <Outlet/>
    </>
  );
};

export default Header;
