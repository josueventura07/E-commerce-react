import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import './styles/productInfo.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice'

const ProductInfo = ({product}) => {

 const [counter, setCounter] = useState(1)
 const [stock, setStock] = useState()

 const handleMinus = () => {
  if(counter - 1 > 0) {
      setCounter(counter - 1)
  }
}

const handlePlus = () => {
  if(counter + 1 <= stock) {
    setCounter(counter + 1)
  }
}

const handleAddCart = () => {
    if(stock <= 0) {
      alert('Este articulo ya no tiene existencia, quizas haya otro similiar!')
      return
    } else {
      const URL = 'http://localhost:9000/api/v1/cart'
        const data = {
          productId: product.id,
          quantity: counter 
        }

        axios.post(URL, data, getConfig())
        .then(res => {
          console.log(res.data)
          alert(`${product.productName}, fue agregado al carrito de compras`)
        })
        .catch(err => console.log(err))
    }
 }

 const products = useSelector(state => state.products)

const dispatch = useDispatch()

useEffect(() => {
  dispatch(getAllProducts())
}, [])

useEffect(()=> {
  products?.forEach(element => {
  if(element.id === product?.id) {
    setStock(element.stock ? element.stock : 0)
  }  
})
}, [product, stock])


  return (
    <article className='product__info'>
        {/*<header className='product__info-img-container'>
            <img className='product__info-img' src={product?.imgsCatalogs[0]} alt="img" />
        </header>*/}
        <h2 className='product__info-title'>{product?.productName}</h2>
        <p className='product__info-description'>{product?.description}</p>
        <footer className='product__info-footer'>
            <div className='product__info__price-container'>
                <span className='product__info__stock-label'>Stock</span>
                <span className='product__info__stock-number'>{stock}</span>
                <span className='product__info__price-label'>Price</span>
                <span className='product__info__price-number'>{product?.price}</span>
            </div>
            <div className='product__info__quantity-container'>
                <h3 className='product__info__quantity-label'>Quantity</h3>
                <div className='product__info__quantity-counter'>
                    <div onClick={handleMinus} className='product__info__quantity-counter-minus'>-</div>
                    <div className='product__info__quantity-counter-result'>{counter}</div>
                    <div onClick={handlePlus} className='product__info__quantity-counter-plus'>+</div>
                </div>
            </div>
            <button onClick={handleAddCart} className='product__info-btn'>
                Add to Cart
                <i className="product__info-icon fa-solid fa-cart-shopping"></i>
            </button>
        </footer>
    </article>
  )
}

export default ProductInfo