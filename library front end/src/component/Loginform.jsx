import React from 'react'
import { Link } from 'react-router-dom'

const Loginform = () => {
  return (    
    <>
        <div className='login_container'>
            <form className="login_form" action="">
                <h1>Login</h1>
                <input className="login_input" type="email" placeholder='Email'/>
                <input className="login_input" type="password" placeholder='Password' />
                <div className='btn_secton'>                    
                    <Link to="/web"><button className='btn'>Login</button> </Link>
                    <p>forget your Password?</p>
                </div>
            </form>
        </div>
    </>

  )
}

export default Loginform