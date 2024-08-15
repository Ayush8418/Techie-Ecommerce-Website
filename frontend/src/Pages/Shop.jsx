import React from 'react'
import Hero from '../Components/Hero/Heroh';
import Popular from '../Components/Popular/popular.jsx';
import NewRelease from '../Components/newRelease/NewRelease.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import AllBanners from '../Components/AllBanners/AllBanners.jsx';

const Shop = () => {
  return (
    <div>
      <Hero />
      <NewRelease/>
      <Popular/>
      <AllBanners/>
      <Footer/>
    </div>
  )
}

export default Shop;
