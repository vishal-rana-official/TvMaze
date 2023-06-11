import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()
  const handlelogout =()=>{
    console.log('logout click')
    localStorage.removeItem('token')
    navigate('/')
  }
  return (
    <div className='navbox'>
      <div className="nav-input">
        <input type="text" placeholder='Search here'/>
        <button><FaSearch/></button>
      </div>
      <div className="nav-logout">
        <button onClick={handlelogout}>Log Out</button>
      </div>
    </div>
  )
}

export default Nav
