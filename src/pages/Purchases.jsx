import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardPurchase from '../components/purchases/CardPurchase'
import getConfig from '../utils/getConfig'
import './styles/purchases.css'

const Purchases = () => {

  const [purchases, setPurchases] = useState()

useEffect(() => {

    const URL = 'https://jv-ecommerce.onrender.com/api/v1/purchases/me'
axios.get(URL, getConfig())
.then(res => setPurchases(res.data.purchases))
.catch(err => console.log(err))    

}, [])

  return (
    <div className='purchases__body'>
      <h2 className='purchases__title'>Purchases History</h2>
      <div className='purchases__container'>
        {
          purchases?.map(purchase => (
            <CardPurchase
            key={purchase.id}
            purchase = {purchase}
            />
          ))
        }
      </div>
    </div>
  )
}


export default Purchases