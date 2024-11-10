import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from './Breadcrum';
import ProductDisplay from './ProductDisplay';
import Descriptionbox from './Descriptionbox';
import NewsLetter from './NewsLetter';

const Product = () => {
  const {all_product}  = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((product) => product.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <Descriptionbox/>
      <NewsLetter/>
    </div>
  )
}

export default Product
