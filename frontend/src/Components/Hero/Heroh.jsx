import React from 'react';
import dragon1 from '../Assets/item1.png'
import dragon2 from '../Assets/item2.png'
import dragon3 from '../Assets/item3.png'
import dragon4 from '../Assets/item4.png'
import dragon5 from '../Assets/item5.png'
import dragon6 from '../Assets/item6.png'
import dragon7 from '../Assets/item7.png'
import "./Heroo.css";

function Hero() {
  return (
    <div>
      <div class="banner">
        <div class="slider"> 
            <div className="item item1"><img src={dragon1} alt=""/></div>
            <div className="item item2"><img src={dragon2} alt=""/></div>
            <div className="item item3"><img src={dragon3} alt=""/></div>
            <div className="item item4"><img src={dragon4} alt=""/></div>
            <div className="item item5"><img src={dragon5} alt=""/></div>
            <div className="item item6"><img src={dragon6} alt=""/></div>
            <div className="item item7"><img src={dragon7} alt=""/></div>
            {/* <div className="item item8"><img src={dragon8} alt=""/></div>
            <div className="item item9"><img src={dragon9} alt=""/></div>
            <div className="item item10"><img src={dragon10} alt=""/></div> */}
        </div>
        <div className="content">
          <h1>Techie</h1>
          <div className='aythor'>
            <h2>Ayush</h2>
            <p>
              ayushkumar8418@gmail.com
            </p>
            <p><b>Ecommerce website that features new and advance tech products </b></p>
          </div>
          <div className="model">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
