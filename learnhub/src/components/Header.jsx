import React from 'react'
import "../../src/App.css";

import { Link } from 'react-router'
function Header() {
  return (
    <header>
        <div className='flex'>
        <Link to="/"className='heading' onClick={()=>{window.scrollTo(0,0)}} >LearnHub</Link>
        <a className='admin' href=''>Admin</a>

        </div>
    </header>
  )
}

export default Header