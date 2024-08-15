import React from 'react';
import "./popular.css";
import Popular from '../Assets/popularItems.js'; 
import Item from "../Item/Item.jsx";

function popular(){
  return (
    <div className='popular'>
      <h1>Populars</h1>
      <hr />
      <div className='popular-item'>
      {Popular.map((item,i)=>{
        return <Item key={i} id={item.id} category={item.category} image={item.image} itemName={item.itemName} brandName={item.brandName} newPrice={item.newPrice} oldPrice={item.oldPrice}/>
      })}
      </div>
    </div>
  )
}

export default popular;
