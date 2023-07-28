import React from 'react'
import { useDispatch } from 'react-redux'
//import { ascendingProducts, descendingProducts } from '../store/slices/products.slice'
import './styles/sortByPrice.css'

const SortByPrice = () => {

    const dispatch = useDispatch()

const handleAscending = () => {
    dispatch(ascendingProducts())
}   

const handleDescending = () => {
    dispatch(descendingProducts())
} 

  return (
    <div className='sort_by_price-container'>
        <button className='sort_by_price-btn' onClick={handleAscending}>Ascending</button>
        <button className='sort_by_price-btn' onClick={handleDescending}>Descending</button>
    </div>
  )
}

export default SortByPrice