import React from "react";
import "./Header.css";
import { FaAngleRight } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <div>
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
        <div className="select-btn">
          <select className="lg-select" name="LanguageSelect" id="">
            <option style={{ background: "black" }} value="">
              English
            </option>
            <option style={{ background: "black" }} value="">
              हिंदी
            </option>
          </select>
          <button className="sign-btn">Sign In</button>
        </div>
      </div>
      <div className="text">
        <h1>Enjoy big movies, hit series and more for just ₹149.</h1>
        <h6>Join today, cancel anytime.</h6>
        <p>
          Ready to watch? Enter your email address to create or restart your
          membership.
        </p>
        <div className="inp-btn">
        
          <input className="input" type="email" />
          <label>Email address</label>
          <button className="start">
            {" "}
            Get Started{" "}
            <span>
              {" "}
              <FaAngleRight />
            </span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
