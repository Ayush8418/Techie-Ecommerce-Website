import React, { useContext, useState } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import CartItem from '../CartItem/CartItem';

const CartItems = () => {
    
    const {getTotalCartItems,getDiscountCartAmount,getTotalCartAmount,all_product,cartItems,removeFromCart } = useContext(ShopContext);
    let x = 0;
    for (let i = 0; i < cartItems.length; i++) {
        if(cartItems[i] !== 0){
            x = x+1;
        }
    }
    
 

  return (
    <div className='cartitems'>
        <div className="cartitems-format-left">
            <div className="cartitem-format-left-address">
                <h6>Delivered to :</h6>
                <p><span>User , 500058</span> A-26/13 Drdo Township Kanchanbagh Hyderabad, Kanchanbagh, Hyderabad</p>
            </div>
            <div className='cartitems-format-left-noOfItems'>
                <h5>{getTotalCartItems()} Selected</h5>
            </div>
            <div className="cartitems-format-left-list">
                {
                    all_product.map((item,i) =>
                        (cartItems[i] !== 0) ?
                        <CartItem  onCrossClick={removeFromCart} key={i} image={item.image} brandName={item.brandName} itemName={item.itemName} quantity={cartItems[i]} newPrice={item.newPrice} oldPrice={item.oldPrice} id={item.id}/>:
                        null
                    )
                }
            </div>
        </div>
        <div className="cartitems-format-right">
            <div className='cartitems-format-right-coupon'>
                <h6>COUPONS</h6>
                <div>
                    <h5>Apply Coupons</h5>
                    <button>Apply</button>
                </div>                
                <hr />
            </div>
            <div className="cartitems-format-right-gift">
                <h6>GIFTING AND PERSONALISATION</h6>
                <div className='cartitems-format-right-gift-price'>
                    <div>
                        <h6>Buying for loved One</h6>
                        <p>add a gift wrap for Rs.35</p>
                        <h6 className='cartitems-format-right-gift-add'>Add Gift</h6>
                    </div>
                </div>
                <hr />
            </div>
            <div className="cartitems-format-right-prices">
                <h6>PRICE DETAILS</h6>
                <div className='price-distribution total'><p>Total MRP</p> <p>₹{getTotalCartAmount()}</p></div>
                <div className='price-distribution discount2'><p>Discount</p> <p>-₹{getTotalCartAmount() - getDiscountCartAmount()}</p></div>
                <div className='price-distribution platform'><p>Platform Fee</p> <p>₹20</p></div>
                <div className='price-distribution shipping'><p>Shipping Fee</p> <p>₹50</p></div>
                <hr />
            </div>
            <div className="cartitems-format-right-total-buy">
                <div className='cartitems-format-right-total'>
                    <h5>Total Amount</h5> <h5>₹{getDiscountCartAmount()}</h5>
                </div>
                <div className='place-order-button'><button>PLACE ORDER</button></div>
            </div>
            
            
        </div>
    </div>
  )
}

export default CartItems
