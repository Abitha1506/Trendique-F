import React from 'react'
import gown from './Images/dress.jpg'
import saree from './Images/saree.webp'
import jumpsuit from './Images/jumpsuit.jpg'
import tshirt from './Images/tshirt.jpg'
import shirt from './Images/shirt.webp'
import jeans from './Images/jeans.webp'
import boy from './Images/boy.jpg'
import boy1 from './Images/boy3.jpg'
import boy2 from './Images/boy2.jpg'
import girl from './Images/girl.jpg'
import girl1 from './Images/girl1.jpg'
import girl2 from './Images/girl2.jpg'
import './Intro.css'

function Intro() {
  return (
   <div>
    <div className='title'>
    <h2>Featured Products</h2>
    </div>

       {/* Women */}
       <section className='women'>
    <h1>For Women</h1> 
    <div class="card-container">
      <div class="card">
      <img src={gown} alt="Elegant Gown" />
      <div class="card-details">
      <h3>Elegant Gown</h3>
      <p class="price">Rs.700</p>
    </div>
  </div>
  
    <div class="card">
    <img src={saree} alt="Traditional Saree" />
    <div class="card-details">
      <h3>Traditional Saree</h3>
      <p class="price">Rs.2000</p>
    </div>
  </div>
  
  <div class="card">
    <img src={jumpsuit} alt="Stylish Jumpsuit" />
    <div class="card-details">
      <h3>Stylish Jumpsuit</h3>
      <p class="price">Rs.900</p>
    </div>
  </div>

</div> 
</section>


    {/* Men */}
  <section className='men'>
   <h1>For Men</h1> 
   <div class="card-container">
        <div class="card">
            <img src={tshirt} alt="Casual T-Shirt" />
            <div class="card-details">
                <h3>Casual T-Shirt</h3>
                <p class="price">Rs.400</p>
            </div>
        </div>

        <div class="card">
            <img src={shirt} alt="Formal Shirt"/>
            <div class="card-details">
                <h3>Formal Shirt</h3>
                <p class="price">Rs.700</p>
            </div>
        </div>

        <div class="card">
            <img src={jeans} alt="Classic Jeans"/>
            <div class="card-details">
                <h3>Classic Jeans</h3>
                <p class="price">Rs.1000</p>
            </div>
            </div>
             
            </div>
            </section>


          {/* kids boys */}
          <h1 className='kids'>Kids</h1>
             <section className='boys'>
            <h1>For Boys</h1> 
             <div class="card-container">
            <div class="card">
            <img src={boy} alt="Formal Shirts" />
            <div class="card-details">
                <h3>Formal Shirts</h3>
                <p class="price">Rs.800</p>
            </div>
        </div>

        <div class="card">
            <img src={boy1} alt="Shervani"/>
            <div class="card-details">
                <h3>Shervani</h3>
                <p class="price">Rs.1000</p>
            </div>
        </div>

        <div class="card">
            <img src={boy2} alt="Shervani"/>
            <div class="card-details">
                <h3>Shervani</h3>
                <p class="price">Rs.1000</p>
            </div>
        </div>

            </div>
            </section>

         {/* kids girls */}
         
         <h1>For Girls</h1> 
         <div class="card-container">
            <div class="card">
            <img src={girl} alt="Long Dress" />
            <div class="card-details">
                <h3>Long Dress</h3>
                <p class="price">Rs.400</p>
            </div>
        </div>

        <div class="card">
            <img src={girl1} alt="Western Fit"/>
            <div class="card-details">
                <h3>Western Fit</h3>
                <p class="price">Rs.700</p>
            </div>
        </div>

        <div class="card">
            <img src={girl2} alt="Long Gown"/>
            <div class="card-details">
                <h3>Long Gown</h3>
                <p class="price">Rs.1000</p>
            </div>
            </div>

            </div>
            </div>
                  
  );
};


export default Intro;                               