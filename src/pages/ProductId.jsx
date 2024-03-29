import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from '../components/productId/ProductInfo'
import SimilarProduct from '../components/productId/SimilarProduct'
import SliderImgs from '../components/productId/SliderImgs'
import './styles/productId.css'

const ProductId = () => {

const [product, setProduct] = useState() 
 

const {id} = useParams()

useEffect(() => {

  const URL = `https://jv-ecommerce.onrender.com/api/v1/products/${id}`

  axios.get(URL)
  .then(res => setProduct(res.data))
  .catch(err => console.log(err))
}, [id])


  return (
   <div className='productid__container'>
    {
      product && <SliderImgs product={product}/>
    }
    <ProductInfo 
    product={product}
    />
    <SimilarProduct
    product={product}
    />
   </div>
  )
}

export default ProductId