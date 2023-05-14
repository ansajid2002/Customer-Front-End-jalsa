import React from 'react'
// import footer from "../images/footer.png"
import "./Footer.css"
import app_store from "../../images/logos/app_store.png"
import google_play from "../../images/logos/google_play.png"
import logo from "../../images/logos/fsblack-logo.png"
import insta from "../../images/logos/instagram.png"
import writemail from "../../images/logos/write-email.png"
import {FaFacebookF,FaTwitter} from "react-icons/fa"

const Footer = () => {
  return ( 
    <footer className='footer'>

      <div className='footer-1'>
        <img src={logo} alt="fs-logo" className='f1-fslogo'/>
        <p className='f1-para'>"shop authentic Indian ethnic products online at Fashion Jalsa - Your one stop destination for Traditional Fashion."</p>
        
        <ul className='f1-icons'>
            <li ><FaFacebookF className='f1-ic'/></li>
            <li><img src={insta} alt="f1-insta-logo"/></li>
            <li ><FaTwitter className='f1-ic'/></li>
        </ul>
    

      </div>
      <div className='footer-2'>
        <h2 className="footer-heading">Supports</h2>
        <ul className="footer-list">
          <li>Contact Us</li>
          <li>Track Orders</li>
          <li>How To Shop</li>
          <li>Stitching</li>
          <li>FAQ</li>

        </ul>
      </div>
      <div className='footer-2'>
        <h2 className="footer-heading">Links</h2>
        <ul className="footer-list">
          <li>About Us</li>
          <li>Terms and Conditions</li>
          <li>Shipping and Return</li>
          <li>Privacy Policy</li>
          <li>Seller Section</li>
        </ul>
      </div>
      <div className='footer-4'>
        <h2 className='footer-heading'>New Arrivals | Discounts | Offers</h2>
        <p className="f1-para">Subscribe to get the latest on sales, new releases and more...</p>
        
        <div className='email-section'>
          <img className='e-email' src={writemail} alt="mail-logo" />
          <input className='e-input' type="text" placeholder="Type Your Email id" /> 
          <button className='e-button'>Submit</button>
        </div>
        <img className='footer-pstore' src={google_play} alt="play_store"/>
          <img src={app_store} alt="app_store" />
      </div>
    </footer>
  )
}

export default Footer




    // </>
//     <footer>
//     <div className="footer-for-page">
//         <div className="row">
//             <div className="col-md-3">
//                 <div className="footer-fashion-jalsa">
//                     <img className="hjfdo" src={fashionlogow} alt="logo" />
//                     <p style={{ color: 'white', textAlign: 'justify' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda atque a quis nihil quo repellendus architecto sed laudantium, magnam quos voluptas reiciendis sequi, obcaecati mollitia voluptate animi consequuntur placeat. Quae?</p>
//                     <div style={{ color: 'white' }} className="header__icons col-md-6">
//                         <i className="fab fa-facebook" style={{}}></i>
//                         <i className="fab fa-instagram" style={{}}></i>
//                         <i className="fab fa-twitter" style={{}}></i>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-md-3">
//                 <div className="pages-links">
//                     <h4 style={{ color: 'white', textAlign: 'center' }}>Supports</h4>
//                     <div className="linkskaps">
//                         <ul className="footer-links-parts-ul">
//                             <li className="footer-links-parts-li">contact us</li>
//                             <li className="footer-links-parts-li">track orders</li>
//                             <li className="footer-links-parts-li">how to shop</li>
//                             <li className="footer-links-parts-li">stiiching</li>
//                             <li className="footer-links-parts-li">fAQ</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-md-3">
//                 <div className="pages-links">
//                     <h4 style={{ color: 'white', textAlign: 'center', marginLeft: '-35px' }}>Quick Links</h4>
//                     <div className="linkskaps">
//                         <ul className="footer-links-parts-ul">
//                             <li className="footer-links-parts-li">about us</li>
//                             <li className="footer-links-parts-li">terms and conditions</li>
//                             <li className="footer-links-parts-li">shipping and return</li>
//                             <li className="footer-links-parts-li">privacy policy</li>
//                             <li className="footer-links-parts-li">seller section</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-md-3">
//                 <h5 style={{ color: 'white', marginBottom: '40px' }}>New Arrival | Discounts | Offers</h5>
//                 <p style={{ color: 'white' }}>Subscribe to get the latest on sales, new releases and more...</p>
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-9" style={{ padding: '0px' }}>
//                             <div className="sdsfd" style={{ display: 'flex' }}>
//                                 <button style={{ backgroundColor: 'black', border: 'none', borderBottom: '1px solid white' }} className="button_searchsd" type="submit"><i style={{ backgroundColor: 'black', color: 'white', fontSize: '30px' }} className="fa fa-envelope"></i></button>
//                                 <input className="input_searchsd" type="text" placeholder="Type your Email Id" name="search2" />
//                             </div>
//                         </div>
//                         <div className="col-md-3">
//                             <input className="xkisaop" type="submit" value="Submit" />
//                         </div>
//                     </div>
//                     <div className="row" style={{ marginLeft: '-65px' }}>
//                         <div className="col-md-6" style={{}}>
//                             <div className="sdsfdvsd" style={{}}>
//                                 <img src={google_play} alt="" />
//                             </div>
//                         </div>
//                         <div className="col-md-6">
//                             <div className="sdsfdvsd" style={{ marginTop: '7px' }}>
//                                 <img src={app_store} alt="" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div> 
//     </div>
// </footer>