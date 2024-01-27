import React from 'react'

const Card = ({data}) => {
    const {productCategoryImage,productCategoryName}= data.productCategory
  return (
    
    <div className='border border-green-400 p-4 m-10 w-48 rounded-lg cursor-pointer hover:p-2' > 
    <img alt="Card logo" src={productCategoryImage} className='w-44'/> 
    <p className='mt-4 p-2  text-center bg-green-600 rounded-lg'>{productCategoryName}</p></div>
  )
}

export default Card
