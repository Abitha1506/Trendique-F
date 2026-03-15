import React from 'react'
import logo from './Images/logo.png'
import Intro from './Intro'
import Footer from './Footer';
import Navbar from './Navbar';
import './Home.css'

function Home() {
  return (
    <div>
      <Navbar/>
   <img src={logo} alt='logo' className='logo'/>
        <Intro/>
        <Footer/>
     </div>
    
  );
};

export default Home;