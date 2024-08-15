import React, { useState } from 'react';
import "./Navbar.css";
import logo from "./../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import user from "../Assets/user.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu,setMenu] = useState("shop");

  return (
    <div className="navbar">
        <Link to='/' style={{textDecoration : 'none' , color:'rgb(0, 0, 0)'}}>
        <div className="nav-logo">
            <img src={logo} alt="" className="logo" />
            <p className="web-name"> Techie </p>
        </div>
        </Link>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration : 'none' , color:'rgb(67, 66, 66)'}}>SHOP</Link> {menu==="shop" ? <hr className='current-category-hr'></hr> : null}</li>
            <li onClick={()=>{setMenu("phone")}}><Link to='/phone' style={{textDecoration : 'none' , color:'rgb(67, 66, 66)'}}>PHONE</Link> {menu==="phone" ? <hr className='current-category-hr'></hr> : null}</li>
            <li onClick={()=>{setMenu("laptop")}}><Link to='/laptop' style={{textDecoration : 'none' , color:'rgb(67, 66, 66)'}}>LAPTOP</Link> {menu==="laptop" ? <hr className='current-category-hr'></hr> : null}</li>
            <li onClick={()=>{setMenu("other")}}><Link to='/other' style={{textDecoration : 'none' , color:'rgb(67, 66, 66)'}}>OTHRES</Link> {menu==="other" ? <hr className='current-category-hr'></hr> : null}</li>
        </ul>
        <div className="nav-login-cart">
            {
                localStorage.getItem('auth-token') ? 
                <button className='logout-nav-icon' onClick={() => {localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button> :
                <Link to='/login'><button className='login-signup-icon'><img src={user} alt="account" /></button></Link>
            }
            
            <Link to='/cart'><button className='cart-logo'><img src={cart_icon} alt=""/></button></Link>
        </div>
    </div>
  )
}

export default Navbar
