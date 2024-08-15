import React, { createContext, useEffect, useState } from "react" ;
import all_product0 from "../Components/Assets/all_products.js";

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
        let cart = {};
        for (let i=0 ; i<all_product0.length+1 ; i++) {
            cart[i] = 0;
        }
        return cart;
}


const ShopContextProvider = (props) => {
    const [cartItems , setCartItems ] = useState(getDefaultCart());
    const [all_product , setAll_product] = useState(all_product0);

    useEffect(() =>{
        // fetch('http://localhost:4000/allproducts')
        // .then((response)=>response.json())
        // .then((data)=>setAll_product0(data))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getCart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type' : 'application/json',
                },body:"",
            }).then((response)=>response.json())
            .then((data) => setCartItems(data));
        }
        
    },[])
    
    const addToCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId-1]:cartItems[itemId-1]+1}));
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart' , {
                method:'POST',
                headers:{
                    Accept:'application',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId-1})
            })
            .then((response)=> response.json())
            .then((data) => console.log(data));
        }
    }
    const removeFromCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId-1]:prev[itemId-1]-1}));
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart' , {
                method:'POST',
                headers:{
                    Accept:'application',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId-1})
            })
            .then((response)=> response.json())
            .then((data) => console.log(data));
        }
    }
    
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(let i=0 ; i<all_product.length ; i++){
            if(cartItems[all_product[i].id] > 0){
                totalAmount += cartItems[all_product[i].id]*all_product[i+1].oldPrice
            }
        }
        return totalAmount;
    }
    const getDiscountCartAmount = () => {
        let discountAmount = 0;
        for(let i=0 ; i<all_product.length ; i++){
            if(cartItems[all_product[i].id] > 0){
                discountAmount += cartItems[all_product[i].id]*all_product[i+1].newPrice
            }
        }
        return discountAmount;
    }
    const getTotalCartItems = () => {
        let totalItem = 0;
        for(let i=0 ; i<all_product.length ; i++){
            if(cartItems[all_product[i].id] > 0){
                totalItem += cartItems[all_product[i].id]
            }
        }
        return totalItem;
    }
    const getTotalItemQuantity = (id) => {
        let totalItem = 0;
        return totalItem;
    }

    const contextValue = {getTotalCartItems ,getTotalCartAmount , getDiscountCartAmount , all_product , cartItems , addToCart , removeFromCart}
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;