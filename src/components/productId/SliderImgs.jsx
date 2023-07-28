import React, { useState } from 'react'
import './styles/sliderImgs.css'

const SliderImgs = ({product}) => {

  const [indexImg, setIndexImg] = useState(0)

  const handlePrev = () => {
    if(indexImg - 1 < 0) {
      setIndexImg(product.imgsCatalogs.length - 1)
    } else {
        setIndexImg(indexImg - 1)
    }
  }

  const handleNext = () => {
    if(indexImg + 1 > product.imgsCatalogs.length - 1) {
      setIndexImg(0)
    } else {
        setIndexImg(indexImg + 1)
    }
  }

const handleClick = (e) => {
    
}  

return (
    <div className='slider__container'>
      <button onClick={handlePrev} className='slider__prev'>&#60;</button>
      <div className='slider__static'>
        <div style={{transform: `translateX(calc(-${indexImg} / 3 * 100%))`}} className='slider_traslateX'>
           { 
                  product.imgsCatalogs.map(url => (
                <div key={url} className='slider__img-container'>
                    <img className='slider__img' src={url.imgUrl} alt="img" />
                </div>
            ))
            }
        </div>
      </div>
      
      <button onClick={handleNext} className='slider__next'>&#62;</button>
      
      <div className='slider__img_container-small'>
        {
          product.imgsCatalogs.map(url => (
                <div onClick={handleClick} key={url} className='slider__img_box-small'>
                    <img className='slider__img-small' src={url.imgUrl} alt="img" />
                </div>
          ))        
        }
      </div>
    </div>
  )
}

export default SliderImgs
