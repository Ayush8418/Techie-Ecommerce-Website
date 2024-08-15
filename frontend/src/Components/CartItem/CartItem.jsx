import React , {useContext} from 'react'
import './CartItem.css'


const CartItem = (props) => {
  return (
    <div className='cartitem'>
        <div className='cartitem-img'>
            <img src={props.image} alt="" />
        </div>
        <div className='cartitem-content'>
            <p className="brand-name">{props.brandName}</p>
            <p className='item-name'>{props.itemName}</p>
            <h6>Qty:{props.quantity}</h6>
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
            <p className='delivery-details1'><span>14 Days</span> return available</p>
            <p className='delivery-details2'>Delivery within <span>3 Days</span></p>
        </div>
        <div className="cross"><button onClick={()=>{props.onCrossClick(props.id)}}> <h2>x</h2> </button></div>
    </div>
  )
}

export default CartItem
