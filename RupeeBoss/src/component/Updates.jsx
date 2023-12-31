import React from 'react'
import photo from '../assets/updates1.png'
import temp from '../assets/temporary.png'
const Updates = () => {
    const update = [
        {
        
          title: "MSME Startup Expo 2023",
          date:"27-28-29 June",
          description:
            "Stall No. 28. World Trade Center,Cuffe Parade,Mumbai",
          imageUrl:photo,
        },
    ]
  return (
    <div className='updates'>
      <div className='heading'>
        <p>Latest Events</p>
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
