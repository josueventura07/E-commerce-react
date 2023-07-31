import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/home/CardProduct'
import FilterCategory from '../components/home/FilterCategory'
import FilterPrice from '../components/home/FilterPrice'
import InputSearch from '../components/home/InputSearch'
import { getAllProducts } from '../store/slices/products.slice'
import SortByPrice from './SortByPrice'
import './styles/home.css'

const Home = ({setNavMenu, navMenu}) => {

const [inputText, setInputText] = useState('')
const [filterByText, setFilterByText] = useState()
const [filterByPrice, setFilterByPrice] = useState({
  from: 0, 
  to: Infinity}) 
   

const products = useSelector(state => state.products)

const dispatch = useDispatch()

useEffect(() => {
  dispatch(getAllProducts())
}, [])

useEffect(() => {

  if(inputText !== '' && products) {
    const cb = product => product.productName.toLowerCase().includes(inputText.toLowerCase().trim())
    setFilterByText(products.filter(cb))
  } else {
    setFilterByText(products)
  }
}, [inputText, products])

const callBackFilterPrice = product => {
    return +product.price >= filterByPrice.from && +product.price <= filterByPrice.to
}
console.log(products)

  return (
    <main className='home'>
      <InputSearch 
      inputText = {inputText}
      setInputText = {setInputText}/>
      <FilterPrice setFilterByPrice = {setFilterByPrice}/>
      <FilterCategory />
      <SortByPrice />
      <div className='home__container'>
        {
          filterByText?.filter(callBackFilterPrice).map(product => (
            <CardProduct key={product.id} 
            product = {product}
            />
          ))
        }
      </div>
    </main>
  )
}

export default Home