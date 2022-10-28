import React from 'react'
import './styles/inputSearch.css'

const InputSearch = ({setInputText, inputText}) => {

const handleChange = e => {
    setInputText(e.target.value)
}    

  return (
    <div className='input__search-container'>
      <input className='input__search' value={inputText} onChange={handleChange} type="text" placeholder='Search'/>
    </div>
  )
}

export default InputSearch
