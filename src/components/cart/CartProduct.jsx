import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import './styles/cartProduct.css'

const CartProduct = (cart) => {

    const dispatch = useDispatch()

    const handleDeleted = () => {
        const URL = `http://localhost:9000/api/v1/cart/${cart.product.product.id}`
        axios.delete(URL, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(getAllProductCart())
        })
        .catch(err => console.log(err))
    }

  return (
    <article className='cartproduct_container'>
        <div className='cartProductInfo'>
            <h2 className='cartProduct_title'>{cart.product.product.productName}</h2>  
            <ul className='cartproduct_list'>
                <li className='cartproduct_result'><span className='cartproduct_description'>Price: </span>${cart.product.product.price}</li>
                <li className='cartproduct_result'><span className='cartproduct_description'>Quantity:  </span>{cart.product.quantity}</li>
            </ul>
            <button onClick={handleDeleted} className="cart__product-btn">
                <i className="cart__product-icon fa-solid fa-trash-can"></i>
            </button>
        </div>
        <div className='cartProduct_img_container'>
            <img className='cartProduct_img' src={cart.product.product.imgsCatalogs[0].imgUrl} alt="" />
        </div>
    </article>
  )
}

export default CartProduct