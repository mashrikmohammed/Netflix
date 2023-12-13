import React from "react";
import "./ForthSec.css";

function ForthSec() {
  return (
    <div className="forth-sec">
      <div className="a-part">
        <h1>Watch everywhere</h1>
        <p>
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </p>
      </div>
      <div className="b-part">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
          alt=""
        />

<div className="video"><video autoPlay playsInline muted loop>
          <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" />
          </video></div>
      </div>
    </div>
  );
}

export default ForthSec;
