import React from "react";
import "./Recomended.css";

const Recomended = () => {
  const data = [
    {
      id: 1,
      img: "./images/recomended/r1.png",
      title: "Blue Skill Kurta Set",
    },
    {
      id: 2,
      img: "./images/recomended/r2.png",
      title: "Blue Skill Kurta Set",
    },
    {
      id: 3,
      img: "./images/recomended/r3.png",
      title: "Blue Skill Kurta Set",
    },
    {
      id: 4,
      img: "./images/recomended/r4.png",
      title: "Blue Skill Kurta Set",
    },
  ];

  return (
    <div className="rec-container">
      <div className="vwall">
        <h1 className="title">Recomended For You</h1>
        <button className="vbtn">View All</button>
      </div>

      <div className="rec-con">
        {data.map((item) => {
          const { id, img, title } = item;

          return (
            <div className="rec" key={id}>
              <img src={img} alt="trend-pic" className="rec-img" />
              <h1 className="rec-same">Fashion Jalsa</h1>
              <h1 className="rec-title">{title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recomended;
