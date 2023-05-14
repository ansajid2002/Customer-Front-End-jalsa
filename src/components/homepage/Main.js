import React from "react";
import "./Main.css";
import women from "../../images/women-main.png"

import {FiArrowLeft,FiArrowRight} from "react-icons/fi"

const Main = () => {
  return (
    <div className="img-women-container">
      <div >
        <img src={women} alt="img-women" className="img-women-main" />
      </div>
      
        <button className="prev"><FiArrowLeft/></button>
        <button className="next"><FiArrowRight/></button>
        
        <div className="img-women-text">
            <h4 className="h4">IFTAAR TO SUHOOR STYLES</h4>
            <h1 className="h1">Eid Ready To Wear</h1>
            <h3 className="h3">ORDER NOW TO GET YOUR OUTFITS BEFORE EID</h3>
            <button className="shop-nows">SHOP NOW</button>
        </div>
    
    </div>
  );
};

export default Main;
