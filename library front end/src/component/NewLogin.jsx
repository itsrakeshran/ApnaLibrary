import React from 'react'

const NewLogin = () => {
  return (
    <>
    <div className="component">
        <input type="text" placeholder="Email address or phone number" />
        <input type="password" placeholder="Password" />
        <button id="login">Log in</button>
    </div>
    </>
  )
}

export default NewLogin