import React, { useContext , useState } from 'react';
import './ProductDisplay.css';
import staricon from '../Assets/icons/star.svg';
import staricondull from '../Assets/icons/star1.svg';
import { ShopContext } from '../../Context/ShopContext';


const ProductDisplay = (props) => {

  const [curr_image,setCurrent_image] = useState("1");
  const {product} = props;
  const {addToCart} = useContext(ShopContext);



  return (
    <div>
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img onClick={()=>{setCurrent_image("1")}} src={product.image} alt="" className={(curr_image==="1") ? 'current-image':'not-current-image'}/>
          <img onClick={()=>{setCurrent_image("2")}} src={product.image} alt="" className={(curr_image==="2") ? 'current-image':'not-current-image'}/>
          <img onClick={()=>{setCurrent_image("3")}} src={product.image} alt="" className={(curr_image==="3") ? 'current-image':'not-current-image'}/>
          <img onClick={()=>{setCurrent_image("4")}} src={product.image} alt="" className={(curr_image==="4") ? 'current-image':'not-current-image'}/>
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-image' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.itemName}</h1>
        <div className="productdisplay-right-star">
            <img src={staricon} alt="" />
            <img src={staricon} alt="" />
            <img src={staricon} alt="" />
            <img src={staricon} alt="" />
            <img className='last-star' src={staricondull} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-new">Rs{product.newPrice}</div>
            <div className="productdisplay-right-price-old">Rs{product.oldPrice}</div>
        </div>
        <div className="productdisplay-right-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt similique
             esse amet illo, ex voluptatibus alias 
            ipsa reprehenderit nobis tenetur aut repudiandae. Totam nostrum ea odit nam amet asperiores aspernatur!
        </div>
        <div className=".productdisplay-right-size">
            <h1 className='size-heading'>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD To Cart</button>
        <p className='productdisplay-right-category'><span>Category: </span>Women , T-shirt , Crop Top</p>
      </div> 
      
    </div>
    </div>
  )
}

export default ProductDisplay
