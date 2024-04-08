import React, {useEffect,useState} from 'react';
import BookCard from './BookCard'

const BookDisplay = () => {
    const[bookdata,setBookdata]=useState([]);

    async function fetchBookData(){
        let getAllBook_url="http://localhost:5000/book"
        let response=await fetch(getAllBook_url,{
            method:"GET",
            mode:'cors'
        });
        let bookdata=await response.json(response);
        setBookdata([...bookdata]);
    }

    useEffect(()=>{
        fetchBookData();
    },[]);

  return (
        <>
        {
            bookdata.map((data)=><BookCard key={data.id} data={data}/>)
        }
        </>

  )
}

export default BookDisplay