import React, { useEffect } from 'react'
import {Link,useNavigate} from 'react-router-dom'

const ProtectedRoutes = (props) => {
    const{Component}= props;

    const navigate =useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login');
        console.log(login)
        if(!login) {
            navigate('/');
        }
    },[])
  return (
    <div>
        <Component/>
    </div>
  )
}

export default ProtectedRoutes;