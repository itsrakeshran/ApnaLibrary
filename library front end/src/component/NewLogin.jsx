import React from 'react'

const NewLogin = () => {
  return (
    <>
    <div className="component">
        <select name="" id="">
          <option value="Student">Student</option>
          <option value="Admin">Admin</option>
          <option value="Librarian">Librarian</option>
        </select>
        <input type="text" placeholder="Email address or phone number" />
        <input type="password" placeholder="Password" />
        <button id="login">Log in</button>
    </div>
    </>
  )
}

export default NewLogin;