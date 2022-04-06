import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (

    <div className="home">
        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=''/>
    
      
      
    <div className="home__row">
      <Product 
        id="12321341" 
        title="The Last Eligible Billionaire" 
        price={149.99} 
        rating={5} 
        image="https://images-na.ssl-images-amazon.com/images/I/81++WLgphhL._UX300__PJku-sticker-v7,TopRight,0,-50_AC_UL254_SR254,254_.jpg"
    />

      <Product 
        id="02256318" 
        title="CEO Excellence: The Six Mindsets That Distinguish the Best Leaders from the Rest" 
        price={399.99} 
        rating={5} 
        image="https://images-na.ssl-images-amazon.com/images/I/71kLWnEYmVL._AC._SR360,460.jpg"
    />
    </div>
    <div className="home__row">
      <Product 
        id="45512369" 
        title="Xbox Series X" 
        price={9999.99}
        rating={5} 
        image="https://m.media-amazon.com/images/I/51q-aP4aNrL._AC_UL320_.jpg"
    />

      <Product 
        id="75889669" 
        title="DualShock 4 Wireless Controller for PlayStation 4 - Jet Black" 
        price={449.99} 
        rating={5} 
        image="https://m.media-amazon.com/images/I/61IG46p-yHL._AC_UL320_.jpg"
    />

      <Product 
        id="36324158" 
        title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)" 
        price={749.99} 
        rating={5} 
        image="https://m.media-amazon.com/images/I/61-PblYntsL._AC_UL320_.jpg"
    />
    </div>
    <div className="home__row">
      <Product 
        id="108875214" 
        title="SAMSUNG 34-Inch Odyssey G5 Ultra-Wide Gaming Monitor with 1000R Curved Screen, 165Hz, 1ms, FreeSync Premium, WQHD (LC34G55TWWNXZA, 2020 Model), Black" 
        price={6999.99} 
        rating={4} 
        image="https://m.media-amazon.com/images/I/61XDeaOrrKL._AC_SX679_.jpg"
    />
      </div>
    </div>
  )
}

export default Home