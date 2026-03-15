import React from 'react';
import Product from './Product';
import './ProductList.css';

const products = [  
  { id: 1, name: 'PartyWear Gown', price: 749, image: "/Images/dress.jpg" },
  { id: 2, name: 'Gown', price: 699, image: "/Images/dress1.webp" },

  { id: 3, name: 'Designer Saree', 'price': 2499, image: "/Images/designer saree.jpg" },
  { id: 4, name: 'Traditional Saree', price: 4999, image: "/Images/traditional saree.jpg" },

  { id: 5, name: 'Jumpsuit', price: 849, image: "/Images/jumpsuit2.webp" },
  { id: 6, name: 'Jumpsuit', price: 899, image: "/Images/jumpsuit.jpg" },

  { id: 7, name: 'Wedding Lenhenga', price: 6999, image: "/Images/lehenga.jpg" },
  { id: 8, name: 'Lenhenga', price: 5999, image: "/Images/lehenga1.jpg" },

  { id: 9, name: 'Cotton Kurti', price: 799, image: "/Images/kurti.jpg" },
  { id: 10, name: 'Anarkali Kurta Set', price: 699, image: "/Images/kurti2.jpg" },

  { id: 11, name: 'Sharvani', price: 4499, image: "/Images/sharvani.jpg" },
  { id: 12, name: 'Sharvani', price: 3999, image: "/Images/sharvani1.jpg" },

  { id: 13, name: 'Courtsuit', price: 4999, image: "/Images/courtsuit.jpg" },
  { id: 14, name: 'Blazer', price: 3999, image: "/Images/blazer1.webp" },

  { id: 15, name: 'Jeans', price: 1399, image: "/Images/jeans1.jpg" },
  { id: 16, name: 'Cargo', price: 999, image: "/Images/jeans.jpg" },

  { id: 17, name: 'Slimfit Shirt', price: 999, image: "/Images/shirt1.jpg" },
  { id: 18, name: 'Shirt', price: 899, image: "/Images/shirt2.jpg" },

  { id: 19, name: 'Oversized Tshirt', price: 849, image: "/Images/tshirt1.jpg" },
  { id: 20, name: 'Fullhand Tshirt', price: 699, image: "/Images/tshirt2.jpg" },

  { id: 21, name: 'Western Dress', price: 999, image: "/Images/kid1.jpg" },
  { id: 22, name: 'Clothing Sets', price: 1299, image: "/Images/kid2.jpg" },

  { id: 23, name: 'Long Gown', price: 2499, image: "/Images/girl2.jpg" },
  { id: 24, name: 'Frock', price: 849, image: "/Images/kid.jpg" },
  { id: 25, name: 'Modern Fit', price: 1199, image: "/Images/kid3.jpg" },


  { id: 26, name: 'Sharvani', price: 849, image: "/Images/kids2.jpg" },
  { id: 27, name: 'Hoodie', price: 849, image: "/Images/kids3.jpg" },
  { id: 28, name: 'Jeans', price: 1399, image: "/Images/kids.webp" },
  { id: 29, name: 'Marriage Court Suit', price: 1899, image: "/Images/kids1.jpg" },
  { id: 30, name: 'Night Dress', price: 849, image: "/Images/kids4.webp" },

];

const ProductList = () => {

  return (
    <div className="product-list-container">
      <h4>Products</h4>
      <div className="product">
        {products.map((product) => (
          <Product key={product.id} product={product}  />
        ))}
      </div>
    </div>
  );
};

export default ProductList;


