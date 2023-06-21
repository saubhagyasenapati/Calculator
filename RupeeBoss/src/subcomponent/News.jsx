import React from 'react'

const News = (props) => {
  return (
    <div className='News'>
      <div className='newsphoto'>
        <img src={props.item.imageUrl} alt="" />
      </div>
      <div className='content'>
        <p className='title'>{props.item.title}</p>
        <p className='desc'>{props.item.description}</p>
        <button className='newsbutton'><a href={props.item.url} target='_blank'>Read More</a></button>
      </div>
    </div>
  )
}

export default News
