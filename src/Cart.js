import React, { useContext } from 'react';
import { datacontext } from './App';
import './Cart.css';

const Cart = () => {
  const { cart, setCart } = useContext(datacontext);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  if (cart.length === 0) {
    return <h2 className='cart-name'>Your cart is empty!</h2>;
  }

  return (
    <div>
  
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div>
              <h3>{item.name}</h3>
              <p>Price: Rs.{item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Cart;


