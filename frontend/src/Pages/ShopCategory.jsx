import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/icons/Dropdown.png';
import all_products from '../Components/Assets/all_products';
import Item from '../Components/Item/Item.jsx';
import Footer from '../Components/Footer/Footer.jsx';


const ShopCategory = (props) => {
  const {all_Product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      {   (props.category==='phone') && <div className='phone-page-banner'><img src={props.banner} alt=""/><div className='phone-banner-div2'><button>Buy Now</button></div></div>
      }{  (props.category==='laptop') && <div className='laptop-page-banner'><img src={props.banner} alt=""/><div className='laptop-banner-div2'></div></div>
      }{  (props.category==='other') && <div className='other-page-banner'><img src={props.banner} alt=""/><div className='other-banner-div2'><button>Buy Now</button></div></div>}
      
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 32 products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt="" height='20px' width='20px' />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_products.map((items,i)=>{
          if(items.category === props.category){
            return <Item key={i} id={items.id} image={items.image} itemName={items.itemName} brandName={items.brandName} newPrice={items.newPrice} oldPrice={items.oldPrice}/>
          }else{
            return null
          }
        })}
      </div>
      <Footer/>
    </div>
  )
}

export default ShopCategory
