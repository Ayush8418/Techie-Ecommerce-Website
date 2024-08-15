import React from 'react'
import all_product from '../Components/Assets/all_products'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay.jsx';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import Footer from '../Components/Footer/Footer.jsx';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts.jsx';

const Products = () => {
  const {productId} = useParams();
  const product = all_product.find((e) => e.id=== Number(productId));
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProducts/>
      <Footer/>
    </div>
  )
}

export default Products;
