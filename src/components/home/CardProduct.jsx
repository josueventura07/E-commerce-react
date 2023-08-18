import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllProductCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import './styles/cardProduct.css'

const CardProduct = ({product}) => {

const navigate = useNavigate()
const dispatch = useDispatch()

const handleNavegation = () => {
    navigate(`/products/${product.id}`)
}

const handleAddCart = e => {
    e.stopPropagation()
    if(product.stock <= 0) {
        alert('Este articulo ya no tiene existencia, quizas haya otro similiar!')
    } else {
        const URL = 'https://jv-ecommerce.onrender.com/api/v1/cart'
        const data = {
            productId: product.id,
            quantity: 1
        }
        axios.post(URL, data, getConfig())
        .then(res => {
            console.log(res.data)
            dispatch(getAllProductCart())
            alert(`${product.productName}, fue agregado al carrito de compras`)
        })
        .catch(err => console.log(err))
    }
}

  return (
    <article onClick={handleNavegation} className='card__product'>
        <header className='card__product__header'>
        <img className='card__product__img' src={product.imgsCatalogs[0].imgUrl} alt="img" />      
        </header>
        <div className='card__product__body'>
            <h3 className='card__product__title'>{product.productName}</h3>
            <div className='card__product__price'>
                <span className='card__product__stock-label'>Stock</span>
                <p className='card__product__stock-number'>{product.stock ? product.stock : 0}</p>
                <span className='card__product__price-label'>Price</span>
                <p className='card__product__price-number'>{product.price}</p>
            </div>
            <button onClick={handleAddCart} className='card__product__icon-container'>
                <i className="card__product__icon fa-solid fa-cart-shopping"></i>
            </button>
        </div>
        
    </article>
  )
}

export default CardProduct