import React from "react";
import wishh from "../../images/wishh.png";
import {FaShare} from "react-icons/fa"
import "./Wishlist.css"

const Wishlist = () => {
  
  const data=[
    {
      img:"./images/women/daud-abbas.png",
      title:"Kalki",
      text:"Stripped Flutter Sleeved"
    },
    {
      img:"./images/mens/m1.png",
      title:"Astore",
      text:"Diamond Earings"
    },
    {
      img:"./images/women/kaftans.png",
      title:"Kalki",
      text:"Silk Patola Kurta Suit"
    },
    {
      img:"./images/women/frocks.png",
      title:"Kalki",
      text:"Indigo Blue Sharara Suit"
    },{
      img:"./images/mens/m3.png",
      title:"Home Center",
      text:"Scented Jar Candle"
    },{
      img:"./images/women/maan-mehran.png",
      title:"Kalki",
      text:"Silk Patla Kurta Suit"
    }
  ]
  
  
  
  return (
    <div>
      <div className="top-wish">
        <h1>WISHLIST (6)</h1>
        <img src={wishh} alt="www" className="fake"/>
      </div>

      <div className="wish-section">

        {
          data.map((w) => {
            const {img,title,text} = w
            
            return (
              <div className="wish-card">
                <div className="img-sec">
                <img src={img} alt="iiimg" className="img-single" />
                <h2 className="img-like"><FaShare/></h2>
              </div>
                <h4 className='kalki'>{title}</h4>
                <p className='para'>{text}</p>
                <h4 className='img-rate'>₹ <s>1,500.00</s>  ₹ 1,000.00</h4>
                <button className="vbtw">ADD TO CART</button>
              </div>
            )
          })
        }





        
      </div>
    </div>
  );
};

export default Wishlist;
