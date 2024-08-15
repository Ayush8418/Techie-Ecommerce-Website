import React from 'react';
import "./NewRelease.css";
import NewReleaseItems from '../Assets/NewRelease.js'; 
import Item from "../Item/Item.jsx";

function NewRelease(){
  return (
        <div className='popular'>
          <h1>New Release</h1>
          <hr />
          <div className='popular-item'>
            {NewReleaseItems.map((item,i)=>{
              return <Item key={i} id={item.id} category={item.category} image={item.image} itemName={item.itemName} brandName={item.brandName} newPrice={item.newPrice} oldPrice={item.oldPrice}/>
            })}
          </div>
        </div>
  )
}

export default NewRelease;
