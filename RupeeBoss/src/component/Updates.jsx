import React from 'react'
import temp from '../assets/updatesTemp.png'
const Updates = () => {
    const update = [
        {
        
          title: "MSME Bharat Manch",
          description:
            "MSME Bharat Manch",
          imageUrl:temp,
        },
        {
         
          title: "MSME Bharat Manch",
          description:
            "MSME Bharat Manch",
          imageUrl: temp,
        },
        {
        
          title: "MSME Bharat Manch",
          description:
            "MSME Bharat Manch.",
          imageUrl: temp,
        },
        {
        
            title: "MSME Bharat Manch",
            description:
              "MSME Bharat Manch",
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
                <p className='subtitle'>{item.description}</p>
                </div>
    
            </div>)
        })}
      </div>
    </div>
  )
}

export default Updates
