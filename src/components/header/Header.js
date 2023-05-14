import React from 'react'
import "./Header.css"
import {FaFacebookF,FaTwitter} from "react-icons/fa"
import {AiOutlineHeart,AiOutlineShoppingCart} from "react-icons/ai"
import {VscAccount} from "react-icons/vsc"
import {GrNotification} from "react-icons/gr"
import {MdManageSearch} from "react-icons/md"
import insta from "../../images/logos/instagram.png"
import logo from "../../images/logos/fs-logo.png"
import flag from "../../images/flag.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">

    
    <div className="header-top">
        <ul className='header-top-icons'>
            <li ><FaFacebookF className='ic'/></li>
            <li><img src={insta} alt="insta-logo"/></li>
            <li ><FaTwitter className='ic'/></li>
            
        </ul>
        <div className='header-top-content'>
            Offer: Buy 2 get 1 Free
        </div>
        <div className="header-top-flag-container">
            <img src={flag} alt="Indian flag" className="header-top-flag"/>
        </div>
    </div>





    {/* <div className="header-middle">
        <ul className="header-choices">
            <button className="vbtnh"><Link style={{textDecoration:"none",color:"inherit"}}  to="/">Women</Link></button>
            <button className="vbtnh"><Link style={{textDecoration:"none",color:"inherit"}}  to="/mens">Men</Link></button>
            <button className="vbtnh">Kids</button>
            <button className="vbtnh">Home & Living</button>
        </ul>
        <img src={logo} className="header-title" alt="fdf"/>
            
        
        <div className="header-middle-icons">
            <img src={iconss} alt="dfdf"/>
        </div>
    </div>
    <div > */}

    <div className="header-middle">
        <div className='header-middle-1'>
        <img src={logo} className="header-middle-logo" alt="fdf"/>
        </div>

        <div className='header-middle-2'>
            <div className='hm-input-search'>
                <input type="text" className='hm-input'/>
                <MdManageSearch  className='hm-search'/> 
            </div>
            <ul className='header-middle-icons'>
                <li><AiOutlineHeart/></li>
                <li><VscAccount/></li>
                <li><GrNotification/></li>
                <li><AiOutlineShoppingCart/></li>
            </ul>
        </div>
    </div>
    <div >


        <ul className="header-bottom">
            <li>Salwar Kameez</li>
            <li>Kurtis</li>
            <li>Pret</li>
            <li>Blouses</li>
            <li>Wedding</li>
            <li><Link to="/mens" className='header-link'>Men</Link></li>
            <li>Unstiched</li>
            <li><Link to="/kids-boys" className='header-link'>Kids</Link> </li>
            <li><Link to="/home-living" className='header-link'>Home & Living</Link></li>
            <li>Sale</li>

        </ul>
    </div>
    </header>
  )
}

export default Header