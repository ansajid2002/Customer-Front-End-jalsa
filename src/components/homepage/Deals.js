import React from 'react'

import "./Deals.css"
const Deals = () => {

    const data = [{
        id:1,
        img:"./images/women/daud-abbas.png",
        title:"Daud Abbas",
        discount:"upto 30% off"

    },{
        id:1,
        img:"./images/women/maan-mehran.png",
        title:"Maan Mehran",
        discount:"upto 50% off"
    },{
        id:1,
        img:"./images/women/daud-abbas.png",
        title:"Daud Abbas",
        discount:"upto 30% off"
    }]




  return (
    <div className="deals-container">

<div className="vwall">
<h1 className="title">Trending Deals Of The Day</h1>
        <button className="vbtn">View All</button>
        </div>

        
        <div className="deals-con">
          {data.map((item) => {
            const { id, img, title,discount } = item;

            return (
              <div className="trending-deals" key={id}>
                <img src={img} alt="trend-pic" className="deals-img" />
                <h1 className="deals-title">{title}</h1>
                <h2 className='disc'>{discount}</h2>
              </div>
            );
          })}
        </div>
      </div>
  )
}

export default Deals