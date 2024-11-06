import { useState } from 'react';
import Shoppe from '../../asserts/bagSvg';
import './Carticon.scss';
import CartDropdown from '../Cartdropdown/CartDropdown';

const Carticon = () => {
  const [hidden, setHidden] = useState(false);

  const handleDropdown= () => {
    setHidden(!hidden);
  };

  return (
    <div className='cart-icon' onClick={handleDropdown}>
      <Shoppe className='shopping-icon'/>
      {hidden&& <CartDropdown/>}
    </div>
  )
}

export default Carticon;