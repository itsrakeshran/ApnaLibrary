import React from 'react'
import { CiUser } from "react-icons/ci";
import { LiaBookSolid } from "react-icons/lia";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { RiDashboard3Line } from "react-icons/ri";
import { IoMdArrowDropright } from "react-icons/io";
import ManageBook from './ManageBook';
import Admin_Dashboard from './Admin_Dashboard';
import {Link,Routes,Route} from 'react-router-dom'
import ManageUser from './ManageUser';
import LogoutButton from '../Button/LoginButton'


const Admin_Menu = () => {
 
        return (        
                <>                
                <div className='menu_container'>
                        
                        <div className='left_sidebar'>
                                <li id="username">
                                        <img src="https://source.unsplash.com/400x400?profile" alt="" height="50px" />
                                        <p >Hii Admin</p> 
                                </li> 
                                <li><hr /></li>
                                <Link to="/admin_menu"><li><p className='sidebar_button'><RiDashboard3Line />Dash Board<IoMdArrowDropright/></p></li></Link>
                                <Link to="/admin_menu/managebook"><li><p className='sidebar_button'><LiaBookSolid />Mange Books<IoMdArrowDropright/></p></li></Link>
                                <li><p className='sidebar_button'><BiSolidCategoryAlt />Mange Category<IoMdArrowDropright/></p></li>
                                <Link to="/admin_menu/manageuser"><li><p className='sidebar_button'><CiUser />Mange User<IoMdArrowDropright/></p></li></Link>     
                               <div className="logout">
                                        <LogoutButton name={"Logout"}/> 
                                </div>
                        </div>

                        <div className='right_sidebar'>
                                <Routes>                      
                                        <Route path='/managebook' element={<ManageBook/>}></Route>  
                                        <Route path='/manageuser' element={<ManageUser/>}></Route>  
                                        <Route path='' element={<Admin_Dashboard/>}></Route>  
                                </Routes>                              
                        </div>                        

                </div>
                </>        
        )
};

export default Admin_Menu;