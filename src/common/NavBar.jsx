
import React, { useState } from 'react'
import './css/navbar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
  const [activeNav, setActiveNav] = useState('/')
  return (
    <main className='navbar_main'>

    <div className='container navbarcontainer'>
<h5 className='mt-2'> <span className='text-primary nav_first'>/AJ</span><span className='px-3 nav_second'>ABHISHEK JHA</span></h5>

<nav>
    <ul className='nav_unorder'>
     <Link to="/" style={{textDecoration:'none', color:'black'}}><li onClick={()=>setActiveNav('/')} className={`nav_list ${activeNav === "/" ? 'active' : ' '}`}>Home</li></Link> 
       <Link to='/about' style={{textDecoration:'none', color:'black'}}><li 
       onClick={()=>setActiveNav('/about')}
       className={`nav_list ${activeNav === "/about" ? 'active' : ' '}`}>About</li></Link>
    
      <Link to='/service' style={{textDecoration:'none', color:'black'}}><li onClick={()=>setActiveNav('/service')} className={`nav_list ${activeNav === '/service' ? 'active' : ' '}`}>Services</li></Link>  
       <Link to='/portfolio' style={{textDecoration:'none', color:'black'}}><li onClick={()=>setActiveNav('/portfolio')} className={`nav_list ${activeNav === '/portfolio' ? 'active' : ' '}`}>Portfolio</li></Link> 
      <Link to='/contact' style={{textDecoration:'none', color:'black'}}><li onClick={() =>setActiveNav('/contact')}className={`nav_list ${activeNav === '/contact' ? 'active' : ' '}`}>Contact</li></Link>  
    </ul>
    <i className="fa-solid fa-bars menu"></i>
</nav>
    </div>
</main>
    )
}
