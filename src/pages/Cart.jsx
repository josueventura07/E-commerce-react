import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/cart/CartProduct'
import { getAllProductCart, setCartGlobal } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'
import './styles/cart.css'

const Cart = () => {

const [total, setTotal] = useState(0)  

const cart = useSelector(state => state.cart)

 const dispatch = useDispatch()

 useEffect(() => {
   dispatch(getAllProductCart())
 }, [])

 const  handlePurchase = () => {
      const URL = 'http://localhost:9000/api/v1/purchases'

      const data = {
        street: "Green St. 1456",
        colony: "Southwest",
        zipCode: 12345,
        city: "USA",
        references: "Some references"
    }

      axios.post(URL, data, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(setCartGlobal(null))
        setTotal(0)
      })
      .catch(err => console.log(err))
 }
 
useEffect(() => {
  if(cart) {
    const result = cart.products.reduce((acc, cv) => {
      return acc + Number(cv.price) * cv.productsInCart.quantity 
    }, 0)
        setTotal(result)
 }
}, [cart])
 

  return (
    <div className='cart'>
      <div className='cart__container'>
        {
          cart?.products.map(product => (
             <CartProduct 
              key={product.id} 
              product={product}
             /> 
          ))
        }
      </div>
      <div className='cart_amount-container'>
        <h2>Total: ${total}</h2>
        <button onClick={handlePurchase} className='cart__btn'>Buy Now</button>
      </div>
    </div>
  )
}

export default Cart