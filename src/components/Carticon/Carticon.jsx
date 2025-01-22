import { useState } from "react";
import Shoppe from "../../asserts/bagSvg";
import "./Carticon.scss";
import CartDropdown from "../Cartdropdown/CartDropdown";
// import {connect} from 'react-redux'

const Carticon = () => {
const [hidden, setHidden] = useState(false);
const handleDropdown= () => {
  setHidden(!hidden);
};
// const Carticon = ({ itemCount }) => {
//   const [hidden, setHidden] = useState(false);
//   const handleDropdown = () => {
//     setHidden(!hidden);
//   };

  return (
    <div className="cart-icon" onClick={handleDropdown}>
      <Shoppe className="shopping-icon" />
      {hidden && <CartDropdown />}
      {/* <span className="item-count">{itemCount}</span> */}
    </div>
  );
};

export default Carticon;
