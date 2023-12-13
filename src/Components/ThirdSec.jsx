import React from "react";
import "./ThirdSec.css";

function ThirdSec() {
  return (
    <div className="third-sec">
      <div className="first-sec">
        <div className="img"></div>
        <div className="details">
          <div className="film-det">
            <div className="img-title">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                alt=""
              />
              <h4>
                Stranger Things <br /> <span>Downloading...</span>
              </h4>
            </div>
            <div className="gif"></div>
          </div>
        </div>
      </div>
      <div className="scnd-sec">
        <h1>Download your shows to watch offline</h1>
        <p>Save your favourites easily and always have something to watch.</p>
      </div>
    </div>
  );
}

export default ThirdSec;
