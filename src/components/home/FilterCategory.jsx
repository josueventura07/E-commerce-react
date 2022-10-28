import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts, getProductsByCategory } from '../../store/slices/products.slice'
import './styles/filterCategory.css'

const FilterCategory = () => {

 const [categories, setCategories] = useState()
 
 useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
   axios.get(URL)
   .then(res => setCategories(res.data.data.categories))
   .catch(err => console.log(err))
 }, [])
 
const dispatch = useDispatch()

 const handleCategoryFilter = id => {
    if(id) {
        //peticion de filtro por categoria
         dispatch(getProductsByCategory(id))   
    } else {
        //peticion de filtro por todos los productos
        dispatch(getAllProducts())
    }
 }

 
  return (
    <article className='filter_category-container'>
        <h1>Category</h1>
        <ul>
            <li className='filtercaterogy_list' onClick={() => handleCategoryFilter()}>All Products</li>
            {
                categories?.map(category => (
                    <li className='filtercaterogy_list' onClick={() => handleCategoryFilter(category.id)} key={category.id}>{category.name}</li>
                ))
            }
        </ul>
    </article>
  )
}

export default FilterCategory