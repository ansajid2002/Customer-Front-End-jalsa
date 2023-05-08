import React from "react";
import data from "./Trendingdata";
import "./Trending.css";

const Trending = () => {
  return (
    
      <div className="trend-container">



<div className="vwall">
<h1 className="title">Shop By Trend</h1>
        <button className="vbtn">View All</button>
        </div>
        <div className="trend-con">
          {data.map((item) => {
            const { id, img, title } = item;

            return (
              <div className="trending-data" key={id}>
                <img src={img} alt="trend-pic" className="trend-img" />
                <h1 className="it-tittle">{title}</h1>
              </div>
            );
          })}
        </div>
      </div>
    
  );
};

export default Trending;
