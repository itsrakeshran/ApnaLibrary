import React,{useEffect, useState} from 'react';
// import BookData from '../data/book';
import Book from '../Book';

const ManageBook = ({bookdata}) => {

  let[currnetBook,setBookdata]=useState(bookdata);



  
  useEffect(() => {
    setBookdata(bookdata);
  }, [bookdata]);


  
       


  return (        
      <div className='product_container'>
        {currnetBook.map((item) => (
            <Book key={item.id} book={item} />
          ))}
      </div>         
    
  )
}

export default ManageBook