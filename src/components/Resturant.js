import React, { useState } from 'react'
import "../style.css"
import Menu from './Menuapi'
import Menucard from './Menucard'
import Navbar from './Navbar'
const uniquelist =[
    ...new Set(Menu.map((curr)=>{
        return curr.category
    }))
]
function Resturant() {
   const [menudata,setmenudata ] = useState(Menu)
   const[menulist,setmenulist]=useState(uniquelist)
   const fileritem=(category)=>{

const updatedlist =Menu.filter((curr)=>{
    return curr.category===category;
})
setmenudata(updatedlist)
   }
    return (
      <>
     
        <Navbar filterItem={fileritem} menuList={menulist}/>
        <Menucard data={menudata}/>

      </>
    )
}

export default Resturant