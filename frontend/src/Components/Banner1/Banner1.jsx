import React from 'react';
import "./Banner1.css";

const Banner1 = () => {
  return (
    <div className='phone-banner'>
        <div className='heading'>
            <h1>BUY1 <span>GET1 FREE</span></h1>
            <p>USE COUPON "B1G1FREE"</p>
        </div>
        <div className='content'>
            <button class="button button--hyperion"><span><span>Buy Now</span></span></button>
        </div>
    </div>
  )
}

export default Banner1;
