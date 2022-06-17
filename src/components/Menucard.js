import React from 'react'

function Menucard({data }) {
  return (
    <div>
        <section className='main-card--cointainer'>
        {data.map((currelem)=>{
            return (
             <div className='card-container'>
             <div className='card'>
                 <div className='card-body'>
                     <span className='card-number card-circle subtle'>{currelem.id}</span>
                     <span className='card-author subtle'> {currelem.name}</span>
                     <h2 className='card-title'>{currelem.name}</h2>
                     <span className='card-description subtle'>
                         loren vishnu
                     </span>
                     <div className='card-read'>
                         Read
                     </div>
                     <img src={currelem.image} alt="images" className='card-media'>
 
                     </img>
                     <span className='card-tag subtle'>
                         order now
                     </span>
                 </div>
             </div>
         </div>
            )
        })}
             </section>
    </div>
  )
}

export default Menucard