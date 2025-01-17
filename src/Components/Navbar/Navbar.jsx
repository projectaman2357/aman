import React, { useRef } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import { useState } from 'react'
import nav_underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'



const Navbar = () => {

  let [menu, setMenu] = useState('Home');
  const menuRef=useRef();

  const openMenu=()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>

      <div className="logo-box">
        <img src={logo} alt="" className='logo' />
        <div className="logo-box-head">
          <h1>Aman Tiwari</h1>
          <h5>SOFTWARE ENGINEER</h5>
        </div>

      </div>

      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />

      <ul ref={menuRef} className='nav-menu'>

        <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close' />

        <li><AnchorLink className='anchor-link' offset={50} href='#Home' ><p onClick={()=>setMenu('Home')}>Home</p>{menu==="Home"? <img src={nav_underline}/>:<></>}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#About' ><p onClick={()=>setMenu('About')}>About Me</p>{menu==="About"? <img src={nav_underline}/>:<></>}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Services' ><p onClick={()=>setMenu('Services')}>Services</p>{menu==="Services"? <img src={nav_underline}/>:<></>}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Portfolio' ><p onClick={()=>setMenu('Portfolio')}>Portfolio</p>{menu==="Portfolio"? <img src={nav_underline}/>:<></>}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Contact' ><p onClick={()=>setMenu('Contact')}>Contact</p>{menu==="Contact"? <img src={nav_underline}/>:<></>}</AnchorLink></li>
      </ul>
      <AnchorLink className='anchor-link' offset={50} href='#Contact' ><div className="nav-connect">Connect With Me</div></AnchorLink>

    </div>
  )
}

export default Navbar
