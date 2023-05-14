import React from "react";
import Slider from "@mui/material/Slider";
import "./Aside.css"
import { Link } from "react-router-dom";

const Aside = () => {
  
  //slider
  const [range, setRange] = React.useState([100, 1]);
  function handleChanges(event, newValue) {
    setRange(newValue);
  }

  const numFormatter =(num) => {
    return num + " Rs"
  }
  return ( 
    <div>
      <h2><Link to="/kids-boys" style={{color:"gray", textDecoration:"none" }}>SHOP BOYS</Link></h2>
      <h1 className="mens-aside-title">GIRLS</h1>
      <div className="mens-checkbox">
        <h2 className="mens-check-title">Shop By Style</h2>
        <input type="checkbox" id="mens-a" className="mens-box" />
        <label htmlFor="mens-a" >Kurta sets (131)</label>
        <br />
        <input type="checkbox" id="mens-b" className="mens-box" />
        <label htmlFor="mens-b" >Frocks (131)</label>
        <br />
        <input type="checkbox" id="mens-c" className="mens-box" />
        <label htmlFor="mens-c" >Kaftan (131)</label>
        <br />
        <input type="checkbox" id="mens-d" className="mens-box" />
        <label htmlFor="mens-d" >Lehengas (131)</label>
        <br />
        <input type="checkbox" id="mens-e" className="mens-box" />
        <label htmlFor="mens-e" >Gharara (131)</label>
        <br />
        <input type="checkbox" id="mens-f" className="mens-box" />
        <label htmlFor="mens-f" >Saree (131)</label>

      </div>
      <div className="mens-checkbox">
        <h2 className="mens-check-title">Shop By Fabric</h2>
        <input type="checkbox" id="mens-g" className="mens-box" />
        <label htmlFor="mens-g" >Cotton</label>
        <br />
        <input type="checkbox" id="mens-h" className="mens-box" />
        <label htmlFor="mens-h" >Polyester</label>
        <br />
        <input type="checkbox" id="mens-i" className="mens-box" />
        <label htmlFor="mens-i" >Crepe</label>
        <br />
        <input type="checkbox" id="mens-j" className="mens-box" />
        <label htmlFor="mens-j" >Chiffon</label>
        <br />
        <input type="checkbox" id="mens-k" className="mens-box" />
        <label htmlFor="mens-k" >Lace</label>
        <br />
        <input type="checkbox" id="mens-z" className="mens-box" />
        <label htmlFor="mens-z" >Silk</label>
        

      </div>

      <div className="mens-checkbox">
        <h2 className="mens-size-title">Size</h2>
          <div className="kg-sizes">
          <div className="kg-s">XS</div>
          <div className="kg-s">S</div>
          <div className="kg-s">M</div>
          <div className="kg-s">L</div>
          <div className="kg-s">XL</div>
          </div>
          

        <input type="checkbox" id="mens-l" className="mens-box" />
        <label htmlFor="mens-l" >Custom</label>
        <br />
        <input type="checkbox" id="mens-m" className="mens-box" />
        <label htmlFor="mens-m" >Unstiched</label>
        <br />
        

      </div>

      <div className="mens-checkbox">
        <h2 className="mens-check-title">Shop By Discount</h2>
        <input type="checkbox" id="mens-p" className="mens-box" />
        <label htmlFor="mens-p" >sale</label>
        <br />
        <input type="checkbox" id="mens-q" className="mens-box" />
        <label htmlFor="mens-q" >Upto 20% off</label>
        <br />
        <input type="checkbox" id="mens-r" className="mens-box" />
        <label htmlFor="mens-r" >Upto 30% off</label>
        <br />
      </div>

      <div className="mens-colors">
        <h2 className="mens-check-title">colors</h2>
        <div className="color-con">


          <div className="red"></div>
          <div className="blue"></div>
          <div className="green"></div>
          <div className="yellow"></div>
          <div className="pink"></div>
        </div>
      </div>

      <div className="price">
        <h2 className="mens-price-title">Price</h2>
        <Slider value={range} onChange={handleChanges}  min={750 }
  max={7000} valueLabelDisplay="auto" className="mens-price-slider" step={10}  valueLabelFormat={numFormatter}/>
      </div>

      <div className="mens-checkbox">
        <h2 className="mens-check-title">Shop By Rating</h2>

        <input type="checkbox" id="mens-s" className="mens-box" />
        <label htmlFor="mens-s" >1.0 to 5.0</label>
        <br />
        <input type="checkbox" id="mens-t" className="mens-box" />
        <label htmlFor="mens-t" >2.0 to 5.0</label>
        <br />
        <input type="checkbox" id="mens-u" className="mens-box" />
        <label htmlFor="mens-u" >3.0 to 5.0</label>
        <br />
        <input type="checkbox" id="mens-v" className="mens-box" />
        <label htmlFor="mens-v" >4.0 to 5.0</label>
        <br />

      </div>
    </div>
  );
};

export default Aside;
