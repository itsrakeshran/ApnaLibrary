import React , {useEffect, useState} from 'react'

//icons
import { LiaBookSolid } from "react-icons/lia";
import { RiDashboard3Line } from "react-icons/ri";
import { IoMdArrowDropright } from "react-icons/io";
import {Link, Route,Routes} from 'react-router-dom';

//Dashboard page content
import Student_Dashboard from './Student_Dashboard';

//books
import BookFilter from '../BookFilter';
import BookData from '../data/book';
import Books from './Books'


const Student_Menu = () => {

        useEffect(() => {
                const fetchBookData = async () => {
                    const api_url = `http://localhost:5000/book`;
                    const response = await fetch(api_url, {
                        method: "GET",
                        mode: "cors"
                    });
                    const apibookdata = await response.json();
                    console.log(apibookdata);
                    setBookdata([...apibookdata]);
                };
            
                fetchBookData();
        }, []);          
        

        const [showBookfilter,setShowBookfilter]=useState(false);

        const[bookdata,setBookdata]=useState([]);

        console.log(bookdata)



        return (        
        <>
                <div className='menu_container'>
                        <div className='left_sidebar'>

                                <li id="username">
                                        <img src="https://source.unsplash.com/400x400?profile" alt="" height="50px" />
                                        <p >Hii Student</p>
                                </li> 
                                <li><hr /></li>
                                <Link to={"/student_menu"}><li onClick={()=>setShowBookfilter(false)}><p className='sidebar_button'><RiDashboard3Line />Dash Board<IoMdArrowDropright/></p></li></Link>
                                <Link to={"/student_menu/books"}> <li onClick={()=>setShowBookfilter(true)}><p className='sidebar_button'><LiaBookSolid />Show Books<IoMdArrowDropright/></p></li></Link>      
                                {showBookfilter?<BookFilter bookdata={bookdata} setBookdata={setBookdata}/>:""}
                                
                        </div>

                        <div className='right_sidebar'>
                                <Routes>
                                        <Route path='' element={<Student_Dashboard/>}></Route>
                                        <Route path='books' element={<Books bookdata={bookdata}/>}></Route>    
                                </Routes>
                                        
                        </div>
                </div>
        </>
        
  )
}

export default Student_Menu;