import React from "react";
import "./SecondSec.css";
function SecondSec() {
  return (
    <div className="second-sec">
      <div className="left-sec">
        <h1>Enjoy on your TV</h1>
        <p>
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
          players and more.
        </p>
      </div>
      <div className="right-sec">
        
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          alt=""
        />
        
        <div className="video"><video autoPlay playsInline muted loop>
          <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" />
          </video></div>
      </div>
    </div>
  );
}

export default SecondSec;
