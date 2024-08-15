import React from 'react'
import './AllBanners.css'
import Banner1 from '../Banner1/Banner1.jsx'
import Banner2 from '../Banner2/Banner2.jsx';
import Banner3 from '../Banner3/Banner3.jsx';

const AllBanners = () => {
  return (
    <div className='all-banner-heading'>
        <h1>Offers For You</h1>
        <hr />
      <div className='banner-line-1'>
        <Banner1/>
        <Banner2/>
      </div>
      <Banner3/>
    </div>
  )
}

export default AllBanners
