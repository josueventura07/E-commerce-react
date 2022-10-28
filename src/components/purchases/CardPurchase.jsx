import React from 'react'
import './styles/cardPurchases.css'


const CardPurchase = ({purchase}) => {

console.log(purchase)
     
  return (
    <article className='purchases_container'>
        <header className='purchases_date'>{purchase.updatedAt}</header>
        <div className='purchase_card'>
            {
                purchase.cart.products.sort().map(product => (
                    <section key={product.id}>
                        <h3>{product.title}</h3>
                        <div>Quantity {product.productsInCart.quantity}</div>
                        <div>Price$ {product.price}</div>
                    </section>
                ))
            }
        </div>
    </article>
  )
}

export default CardPurchase
