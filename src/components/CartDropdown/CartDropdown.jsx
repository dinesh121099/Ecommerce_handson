import { useSelector } from 'react-redux'
import './CartDropdown.scss'
import { CartItem } from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import CustomButton from '../CustomButton/CustomButton';

const CartDropdown = () => {
  const cart= useSelector(state => state.cart);
  const {cartItems} = cart;
  return (
    <div className="cart-dropdown">
        <div className="cart-items">
          {cartItems.map(item => <CartItem item={item} key={item.id}/>)}
        </div>
        <Link to="/checkout">
        <CustomButton className="custom-button">Checkout</CustomButton>
        </Link>
    </div>
  )
}

export default CartDropdown