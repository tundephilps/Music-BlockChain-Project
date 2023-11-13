import "../styles/card.module.scss";

import React from "react";

const Card: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-center ">
        <div className="parent">
          <div className="card">
            <div className="content-box">
              <h1 className="card-title">Sky Blue</h1>
              <p className="card-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                alias ipsam repudiandae laudantium perspiciatis itaque?
              </p>
              <span className="see-more">See More</span>
            </div>
            <div className="date-box">
              <span className="month">Neon</span>
              <span className="date">3D</span>
            </div>
          </div>
        </div>

        <div className="parent card2">
          <div className="card">
            <div className="content-box">
              <h1 className="card-title">Red Moon</h1>
              <p className="card-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                alias ipsam repudiandae laudantium perspiciatis itaque?
              </p>
              <span className="see-more">See More</span>
            </div>
            <div className="date-box">
              <span className="month">Neon</span>
              <span className="date">3D</span>
            </div>
          </div>
        </div>

        <div className="parent card3">
          <div className="card">
            <div className="content-box">
              <h1 className="card-title">Green Grass</h1>
              <p className="card-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                alias ipsam repudiandae laudantium perspiciatis itaque?
              </p>
              <span className="see-more">See More</span>
            </div>
            <div className="date-box">
              <span className="month">Neon</span>
              <span className="date">3D</span>
            </div>
          </div>
        </div>

        <div className="parent card4">
          <div className="card">
            <div className="content-box">
              <h1 className="card-title">Purples Planet</h1>
              <p className="card-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                alias ipsam repudiandae laudantium perspiciatis itaque?
              </p>
              <span className="see-more">See More</span>
            </div>
            <div className="date-box">
              <span className="month">Neon</span>
              <span className="date">3D</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
