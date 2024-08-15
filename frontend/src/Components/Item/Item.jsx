import React from 'react';
import "./Item.css";
import { Link } from 'react-router-dom';

function Item (props) {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}>
      <div className='imageDiv'><img onClick={window.scrollTo(0,0)} onDragEnter={console.log(props.Id)} src={props.image} alt="item-image" height="300px" width="250px"/></div>
      </Link>
      <p className="brand-name">{props.brandName}</p>
      <p className='item-name'>{props.itemName}</p>
      <div className="item-price">
        <div className="item-price-new">
            <p>Rs.</p>
            {props.newPrice}
        </div>
        <div className="item-price-old">
            <p>Rs.</p>
            {props.oldPrice}
        </div>
        <div className="discount">
            <p>(-{Math.floor(100-(100/props.oldPrice)*props.newPrice)}%)</p>
        </div>
      </div>
    
    </div>
  )
}

export default Item;
