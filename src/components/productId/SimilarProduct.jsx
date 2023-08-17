import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardProduct from '../home/CardProduct'
import './styles/similarProduct.css'

const SimilarProduct = ({product}) => {

    const [categories, setCategories] = useState()
    const [idCategory, setIdCategory] = useState()
    const [similarProducts, setSimilarProducts] = useState()

    
    useEffect(() => {
      const URL = 'http://localhost:9000/api/v1/categories'
      axios.get(URL)
      .then(res => setCategories(res.data.categories))
      .catch(err => console.log(err))
    }, [])
    
    useEffect(() => {
        if(categories && product) {
            const cb = category => category.name === product.category.name
            setIdCategory(categories.filter(cb)[0].id) 
        }
    }, [categories, product])
    
   

    useEffect(() => {
      
      if(idCategory) {

        const URL = `http://localhost:9000/api/v1/products?category=${idCategory}`
        axios.get(URL)
        .then(res => setSimilarProducts(res.data.products))
        .catch(err => console.log(err))
      }
    }, [idCategory])
    
  
  return (
    <div className='similarproduct__container'>
      <h2 className='similarproduct__title'>Discover Similar Products</h2>
      <div className='similarproduct__cards-container'>
        {
          similarProducts?.map(prod => {
            if(product.id !== prod.id) {
                return  <CardProduct key={prod.id} product={prod}/>
            }
})
        }
      </div>
    </div>
  )
}

export default SimilarProduct