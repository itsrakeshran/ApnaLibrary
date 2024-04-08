import React from 'react'
import { CiUser } from "react-icons/ci";
import { LiaBookSolid } from "react-icons/lia";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { RiDashboard3Line } from "react-icons/ri";
import { IoMdArrowDropright } from "react-icons/io";
// import ManageBook from "./ManageBook";
import Librarian_Dashboard from './Librarian_Dashboard';
import LogoutButton from '../Button/LoginButton'


const Librarian_Menu = () => { 
        
        return (             
                <div className='menu_container'>  
                        <div className='left_sidebar'>

                                <li id="username">
                                        <img src="https://source.unsplash.com/400x400?profile" alt="" height="50px" />
                                        <p >Hii Librarian</p>
                                </li> 
                                <li><hr /></li>
                                <li><p className='sidebar_button'><RiDashboard3Line />Dash Board<IoMdArrowDropright/></p></li>
                                <li><p className='sidebar_button'><LiaBookSolid />Issue Books<IoMdArrowDropright/></p></li>
                                <li><p className='sidebar_button'><BiSolidCategoryAlt />Return Books<IoMdArrowDropright/></p></li>
                                <li><p className='sidebar_button'><CiUser />Collect Fine<IoMdArrowDropright/></p></li>   
                                <li><p className='sidebar_button'><CiUser />Dues Check<IoMdArrowDropright/></p></li>                           
                        </div>

                        <div className='right_sidebar'>
                                        {/* <ManageBook/> */}
                                        <Librarian_Dashboard/> 
                        </div>
                        <div className="logout">
                                <LogoutButton name={"Logout"}/> 
                        </div>
                </div>        
        )
}

export default Librarian_Menu