import React from 'react'
import './styles/cardPurchases.css'


const CardPurchase = ({purchase}) => {

console.log(purchase.products)
     
  return (
    <article className='purchases_container'>
        <header className='purchases_date'>{purchase.updatedAt}</header>
        <div className='purchase_card'>
            {
                purchase.products.sort().map(product => (
                    <section key={product.id}>
                        <h3>{product.productName}</h3>
                        <div>Quantity {product.detail_orders.quantity}</div>
                        <div>Price$ {product.price}</div>
                    </section>
                ))
            }
        </div>
    </article>
  )
}

export default CardPurchase
