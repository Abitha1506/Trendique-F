import React, { useContext } from 'react';
import { datacontext } from './App';

const Product = ({ product }) => {
  const { cart, setCart } = useContext(datacontext); // Get cart and setCart from context

  const AddToCart = (product) => {
    console.log('Adding product to cart:', product);  // Log the product being added
    setCart([...cart, product]);  // Update the cart by adding the product
  };
  console.log(cart);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>Rs.{product.price}</p>
      <button onClick={() => AddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
