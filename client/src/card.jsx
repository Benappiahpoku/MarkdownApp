import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="top-text">
          How many stars will you give our online editor?
        </div>
        <div className="stars">★★★★★</div>
        <div className="bottom-text">
          Excellent! We are thrilled to hear you had such a positive experience{" "}
          <br></br> Thank you for choosing our platform
        </div>
      </div>
    </div>
  );
};

export default Card;
