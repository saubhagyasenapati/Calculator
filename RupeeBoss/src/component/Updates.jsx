import React from 'react'
import temp from '../assets/updates1.png'
const Updates = () => {
    const update = [
        {
        
          title: "MSME Bharat Manch",
          date:"27-28-29 June",
          description:
            "Stall No. 28. WTC, Cuffe Parade",
          imageUrl:temp,
        },
        {
         
          title: "MSME Bharat Manch",
          date:"27-28-29 June",
          description:
            "Stall No. 28. WTC, Cuffe Parade",
          imageUrl: temp,
        },
        {
        
          title: "MSME Bharat Manch",
          date:"27-28-29 June",
          description:
            "Stall No. 28. WTC, Cuffe Parade",
          imageUrl: temp,
        },
        {
        
            title: "MSME Bharat Manch",
            date:"27-28-29 June",
            description:
              "Stall No. 28. WTC, Cuffe Parade",
            imageUrl: temp,
          },
    ]
  return (
    <div className='updates'>
      <div className='heading'>
        <p>Latest Updates</p>
      </div>
      <div className='updatecards'>
        {update.map((item)=>{
            return(
            <div className='updatecard'>
                <img src={item.imageUrl} alt="" className='updateimg'/>
                <div className='content'>
                <p className='title'>{item.title}</p>
                <p className='date'>{item.date}</p>
                <p className='subtitle'>{item.description}</p>
                </div>
    
            </div>)
        })}
      </div>
    </div>
  )
}

export default Updates
