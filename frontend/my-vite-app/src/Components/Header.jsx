import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-primary'>
  <Link className="navbar-brand text-white mx-3" to="/">
  CodeWithPriyanshu</Link>
  <button className='navbar-toggler'
  type="button" 
  data-toggles="collapse"
  data-target="#navbarSupportedContent"
  aria-controls='navbarSupportedContent'
  aria-expanded="false"
  aria-label='Toggle navigation'>
    <span className='navbar-toggler-icon'></span>
  </button>
 <div className='collapse navbar-collapse' id="navbarSupportedContent">
<ul className='navbar-nv mr-auto text-white'>
    <li className='nav-item active'>
        <Link className='nav-link text-white' to="/">Home</Link>
    </li>
<li className='nav-itme'>
    <Link className='nav-item text-white' to="/add-blog">Add Blog</Link>
</li>
<li className='nav-item'>
    <Link className='nav-link text-white' to="/add-category">Add Category</Link>
</li>

</ul>
<div className='div-inline mx-auto my-2 my-lg-0'>
    <Link to={"/login"}>
    <button className='btn btn-primary'>Login</button>
    </Link>
    <Link to ={"/register"}>
    <button className='btn btn-primary'>Register</button>
    </Link>
</div>
 </div>

    </nav>
  )
}
export default Header;