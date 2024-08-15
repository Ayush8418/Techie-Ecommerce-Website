import React from 'react'
import './RelatedProducts.css'
import all_product from '../Assets/all_products.js';
import Item from '../Item/Item.jsx'

const RelatedProducts = () => {
    let arr = [];
    for(let i=0 ; i<5 ;  i++){
        arr.push(all_product[Math.floor(Math.random()*40)]);
    }
  return (
    <div className='relatedproducts'>
      <h1>Related products</h1>
      <hr />
      <div className="relatedproducts-item">
        {
            arr.map((item,i) => {
              return <Item key={i} category={item.category} id={item.id} image={item.image} itemName={item.itemName} brandName={item.brandName} newPrice={item.newPrice} oldPrice={item.oldPrice}/>
            })
        }
      </div>
    </div>
  )
}

export default RelatedProducts
