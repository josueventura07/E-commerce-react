import React from 'react'
import './styles/cardPurchases.css'


const CardPurchase = ({purchase}) => {

  return (
    <article className='purchases_container'>
        <header className='purchases_date'>{purchase.updatedAt}</header>
        <h4>Numero de Orden: {purchase.id}</h4>
        <h3>Monto Total: {purchase.amount}</h3>
        <div className='purchase_card'>
            {
                purchase.detail_orders?.sort().map(product => (
                    <section key={product.product.id}>
                        <h3>{product.product.productName}</h3>
                        <div>Quantity {product.quantity}</div>
                        <div>Price$ {product.product.price}</div>
                        <div className='purchases_img_container'>
                            <img className='purchases_img' src={product.product.imgsCatalogs[0].imgUrl} alt="" />
                        </div>
                    </section>
                ))
            }
        </div>
    </article>
  )
}

export default CardPurchase
