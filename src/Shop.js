import React from 'react';
import ProductList from './ProductList';
import './Home.css';
import Footer from './Footer';
import logo1 from './Images/logo2.jpg'
import Navbar from './Navbar';


const Shop = () => {

  return (
    <div>
      <Navbar/>
      <a href='/' className='button'>Home > Shop</a>
      <img src={logo1} alt='logo' className='logo1'/>
      <ProductList />
      <Footer />
    </div>
  );
};

export default Shop;
