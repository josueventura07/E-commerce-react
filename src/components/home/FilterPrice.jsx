import React from 'react'
import './styles/filterPrice.css'

const FilterPrice = ({setFilterByPrice}) => {

  const handleSubmit = e => {
        e.preventDefault()
        const from = +e.target.from.value
        const to = +e.target.to.value
        const obj = {
           from: from,
           to: to !== 0 ? to : Infinity 
        }
        setFilterByPrice(obj)
  } 

  return (
    <form className='filter_price-container' onSubmit={handleSubmit}>
        <h3 className='filter_price-title'>Price</h3>
        <div className='filter_price-input-from'>
            <label className='filter_price-label' htmlFor="from">From</label>
            <input className='filter_price-input-from-from' type="number" id='from'/>
        </div>
        <div className='filter_price-input-to'>
            <label className='filter_price-label' htmlFor="to">To</label>
            <input className='filter_price-input-to-to' type="number" id='to' />
        </div>
        <button className='filter_price-btn'>Filter</button>
    </form>
  )
}

export default FilterPrice