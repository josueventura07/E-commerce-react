import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import './styles/cartProduct.css'

const CartProduct = ({product}) => {

    const dispatch = useDispatch()

    const handleDeleted = () => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
        axios.delete(URL, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(getAllProductCart())
        })
        .catch(err => console.log(err))
    }

  return (
    <article className='cartproduct_container'>
        
        <h2>{product.title}</h2>
        <ul className='cartproduct_list'>
            <li className='cartproduct_result'><span className='cartproduct_description'>Price: </span>${product.price}</li>
            <li className='cartproduct_result'><span className='cartproduct_description'>Quantity:  </span>{product.productsInCart.quantity}</li>
        </ul>
        <button onClick={handleDeleted} className="cart__product-btn">
            <i className="cart__product-icon fa-regular fa-trash-can"></i>
        </button>
    </article>
  )
}

export default CartProduct