import React from "react";
import "./Featured.css";
const Featured = () => {
  const data = [
    {
      id: 1,
      img: "./images/brands/b1.png",
    },
    {
      id: 2,
      img: "./images/brands/b2.png",
    },
    {
      id: 3,
      img: "./images/brands/b3.png",
    },
    {
      id: 4,
      img: "./images/brands/b4.png",
    },
    {
      id: 5,
      img: "./images/brands/b1.png",
    },
    {
      id: 6,
      img: "./images/brands/b2.png",
    },
    {
      id: 7,
      img: "./images/brands/b3.png",
    },
    {
      id: 8,
      img: "./images/brands/b4.png",
    },
  ];

  return (
    <div>
      <div className="f-container">
        <div className="vwall">
          <h1 className="title">Featured Bands</h1>
          <button className="vbtn">View All</button>
        </div>
        <div className="f-con">
          {data.map((item) => {
            const { id, img } = item;

            return (
              <div className="f-deals" key={id}>
                <img src={img} alt="trend-pic" className="f-img" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Featured;
