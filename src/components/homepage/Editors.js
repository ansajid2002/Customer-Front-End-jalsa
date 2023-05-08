import React from "react";
import "./Editors.css";

const Editors = () => {
  const data = [
    {
      img: "./images/editors.png",
      title: "Pleasant Purple Tones",
      text: "Grab From The Royal Hues",
    },
    {
      img: "./images/editors.PNG",
      title: "Ready To Ship",
      text: "Don't Wait, Get The Stunning Look",
    },
  ];

  return (
    <div className="editor-all">
        
      <h1 className="ed-head">Editors Choice</h1>
      <div className="flex-con">
        {data.map((item) => {
          const { img, title, text } = item;
          return (
            <div className="editor-item">
              <img src={img} alt="editors" className="editor-img" />
              <div className="editor-content">
                <h1 className="edti">{title}</h1>
                <h2 className="edt">{text}</h2>
                <button className="shop-now">SHOP NOW</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Editors;
