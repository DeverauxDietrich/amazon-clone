import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (

    <div className="home">
        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=''/>
    
      
      
    
    <Product 
        id="12321341" 
        title="The Last Eligible Billionaire" 
        price="149.99" 
        rating={5} 
        image="https://images-na.ssl-images-amazon.com/images/I/81++WLgphhL._UX300__PJku-sticker-v7,TopRight,0,-50_AC_UL254_SR254,254_.jpg"
    />
    </div>
  )
}

export default Home