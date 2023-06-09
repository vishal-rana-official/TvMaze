import React from 'react'
import {FaSearch} from 'react-icons/fa'

const Nav = () => {
  return (
    <div className='navbox'>
      <div className="nav-input">
        <input type="text" placeholder='Search here'/>
        <button><FaSearch/></button>
      </div>
      <div className="nav-logout">
        <button>Log Out</button>
      </div>
    </div>
  )
}

export default Nav
