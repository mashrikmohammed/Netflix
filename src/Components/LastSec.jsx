import React from "react";
import "./LastSec.css";

function LastSec() {
  return (
    <div className="last-sec">
      <p>
        Questions? Call <span>000-800-919-1694</span>{" "}
      </p>
      <div className="main">
        <div className="first">
          <div className="a">
            <ul>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Investor Relations</a>
              </li>
              <li>
                <a href="">Privacy</a>
              </li>
              <li>
                <a href="">Speed Test</a>
              </li>
            </ul>
            <select className="lg-select" name="" id="">
              <option style={{ background: "black" }} value="">
                English
              </option>
              <option style={{ background: "black" }} value="">
                हिंदी
              </option>
            </select>
            <br />
            <br />
            <span>Netflix India</span>
          </div>
          <div className="b">
            <ul>
              <li>
                <a href="">Help Centre</a>
              </li>
              <li>
                <a href="">Jobs</a>
              </li>
              <li>
                <a href="">Cookie Preferences</a>
              </li>
              <li>
                <a href="">Legal Notices</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="second">
          <div className="c">
            <ul>
              <li>
                <a href="">Account</a>
              </li>
              <li>
                <a href="">Ways To Watch</a>
              </li>
              <li>
                <a href="">Corporate Information</a>
              </li>
              <li>
                <a href="">Only on Netflix</a>
              </li>
            </ul>
          </div>
          <div className="d">
            <ul>
              <li>
                <a href="">Media Centre</a>
              </li>
              <li>
                <a href="">Terms of Use</a>
              </li>
              <li>
                <a href="">Contact US</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastSec;
