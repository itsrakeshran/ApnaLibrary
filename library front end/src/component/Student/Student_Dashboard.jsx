import React from 'react'
import Itemcard from '../Itemcard'

import { LiaBookSolid } from "react-icons/lia";


const Student_Dashboard = () => {
  return (
    <div>
        <div className='row_grp'>
                <li className="row_row">  
                        <Itemcard name="Books" data="100" icon={<LiaBookSolid/>}/> 
                        <Itemcard name="Issued Books" data="100" icon={<LiaBookSolid/>}/>
                        <Itemcard name="Active user" data="100" icon={<LiaBookSolid/>}/> 
                        <Itemcard name="Active Member" data="100" icon={<LiaBookSolid/>}/> 
                        <Itemcard name="Books Inside Library" data="100" icon={<LiaBookSolid/>}/> 
                 </li>
         </div>
    </div>
  )
}

export default Student_Dashboard