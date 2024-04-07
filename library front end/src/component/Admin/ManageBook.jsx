
import HorizontalButton from '../HorizontalButton'
import AddBook from '../Forms/AddBook'
import React, { useEffect, useState } from 'react';


const ManageBook = () => {
  const[showAddBookForm,setShowAddBookForm] =useState(false);
  const[showBackGrnd,setShowBackGrnd]=useState(true);

  useEffect(()=>{if(showAddBookForm){
      setShowBackGrnd(false);
    }else{
      setShowBackGrnd(true)
    }}
  ,[showAddBookForm])

  return (
    <div className='display'> 
   
            {showAddBookForm?<AddBook click={setShowAddBookForm}/>:""}
   
          {showBackGrnd?
          <div className='display_section'>

          <p>Books</p>
          <div onClick={()=>setShowAddBookForm(true)}><HorizontalButton name="Add Book"/></div>
          
          <HorizontalButton name="Delete Book"/>
          <HorizontalButton name="Update Book"/>
        </div>:""}
    </div>
  )
}

export default ManageBook