import React from 'react';
import './Breadcrums.css';
import arrow_icon from "../Assets/icons/arrow.svg";

const Breadcrums = (props) => {
    const {product} = props
  return (
    <div className='breadcrum'>
      home <img src={arrow_icon} alt="" height='20px'/> Shop <img src={arrow_icon} alt="" height='20px'/> {product.category} <img src={arrow_icon} alt="" height='20px'/> {product.itemName}
    </div>
  )
}

export default Breadcrums;
