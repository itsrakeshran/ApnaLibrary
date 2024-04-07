
import HorizontalButton from '../HorizontalButton'
import AddBook from '../Forms/AddBook'
import React, { useEffect, useState } from 'react';
import Booklist from '../Booklist';
import PieChar from '../PieChar'

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
        <h1>Book Statics:</h1> 
        <div className="dispay-upper">
          <PieChar/>
        </div>   
            
        <div className="display-lower">
          <div className="display-left">
              <p>Books</p>
              <div onClick={()=>setShowAddBookForm(true)}><HorizontalButton name="Add Book"/></div>
              <HorizontalButton name="Delete Book"/>
              <HorizontalButton name="Update Book"/>
          </div>
          <div className="display-right">
            {showAddBookForm?
                  <AddBook click={setShowAddBookForm}/>:
                <>
                  <div className="display-right-header">
                  <h1>hello</h1>
                </div>
                <div className="display-right-list">
                  <div className="display-right-list-booklist">
                    <Booklist/>
                    <Booklist/>
                    <Booklist/>
                    <Booklist/>
                  </div>
                </div>
                </>}          
          </div>
        </div>       
      </div>
  )
}

export default ManageBook