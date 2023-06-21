import React from 'react'

const WorkCompoent = (props) => {
  return (
    <div className='mainbox'>
        {props.item.alignLeft&&
          <div className='photo'>
          <img src={props.item.imageUrl} alt="" />
        </div>
        }
    
      <div className='content'>
        <div className='header'>
           <div className='num'>
            <p>{props.item.num}</p>
           </div>
           <div className='title'> 
           <p>{props.item.title}</p> 
           </div>
        </div>
        <div className='subtitle'>
           <p>{props.item.description}</p>
        </div>
      </div>
      {!props.item.alignLeft&&
          <div className='photo'>
          <img src={props.item.imageUrl} alt="" />
        </div>
        }
    </div>
  )
}

export default WorkCompoent
