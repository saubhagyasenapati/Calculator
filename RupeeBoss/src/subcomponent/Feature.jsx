import React from 'react'

const Feature = (props) => {
  return (
    <div className='feature'>
      <div className='roundicon'>
        <img src={props.item.imageUrl} alt="" />
      </div>
      <div>
        <p className='title'>{props.item.title}</p>
      </div>
      <div>
        <p className='subtitle'>{props.item.description}</p>
      </div>
    </div>
  )
}

export default Feature
