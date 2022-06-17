import React, { useState } from 'react'
import "../style.css"
import Menu from './Menuapi'
import Menucard from './Menucard'
function Resturant() {
   const [menudata,setmenudata ] = useState(Menu)
   const fileritem=(category)=>{
const updatedlist =Menu.filter((curr)=>{
    return curr.category===category;
})
setmenudata(updatedlist)
   }
    return (
      <>
      <nav className='navbar'>
        <div className='btn-group'>
            <button className='btn-group__item' onClick={()=>fileritem("breakfast")}>breakfast</button>
            <button className='btn-group__item'  onClick={()=>fileritem("lunch")}>lunch</button>
            <button className='btn-group__item'onClick={()=>fileritem("evening")}>evening</button>
            <button className='btn-group__item'onClick={()=>fileritem("dinner")}>dinner</button>
            <button className='btn-group__item'onClick={()=>setmenudata(Menu)}>All</button>

        </div>
      </nav>

        <Menucard data={menudata}/>

      </>
    )
}

export default Resturant