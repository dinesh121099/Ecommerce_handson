import './CartItem.scss'
 
export const CartItem = ({item: {name,imageUrl,price, quantity}}) =>(
   <div className='cart-item'>
        <img src={imageUrl} alt='item'/>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
        </div>
    </div>
)