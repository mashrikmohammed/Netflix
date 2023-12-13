import React, { useState } from "react";
import "./SixthSec.css";
import { FaAngleRight } from "react-icons/fa";
import { data } from "./SixthData";

function SixthSec() {
  const [select, setSelect] = useState();

  const showOrHide = (setItems) => {
    if (select === setItems) {
      return setSelect();
    }
    setSelect(setItems);
  };

  return (
    <div className="sixth-sec">
      <h1 className="sixth-head">Frequently Asked Questions</h1>
      {data.map((items, setItems) => (
        <>
          <div className="q-div" onClick={() => showOrHide(setItems)}>
            <div>{items.question}</div>
            <div className="plus">{select === setItems ? "x" : "+"}</div>
          </div>
          <div className={select === setItems ? "a-div show" : "a-div"}>
            <div className="c-div">
              {items.answer} <br /> <br /> {items.answer2}
            </div>
          </div>
        </>
      ))}

      <p className="last-p">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="inp-btn">
        <input className="input" type="email" placeholder="Email address" />
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
  );
}

export default SixthSec;
