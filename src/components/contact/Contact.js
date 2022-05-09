import React, { useEffect, useRef } from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="Contact-container">
      <div className="Contact-content">
        <div className="Contact-e-card">
          <div className="Contact-card">
            <div className="Contact-card-top">
              <div className="Contact-card-lines">
                <div className="Contact-card-line" />
                <div className="Contact-card-line" />
                <div className="Contact-card-line" />
                <div className="Contact-card-line" />
                <div className="Contact-card-line" />
                <div className="Contact-card-line" />
                <div className="Contact-card-line" />
                <div className="Contact-card-line" />
              </div>
              {/* <div className="Contact-filler" /> */}
              <div className="Contact-card-right">
                <p className="Contact-card-link">an23lm@gmail.com</p>
                <p className="Contact-card-link">github.com/an23lm</p>
              </div>
            </div>
            <div className="Contact-card-bottom">
              <p className="Contact-card-subtitle">Full Stack Developer</p>
              <p className="Contact-card-title">Anselm Joseph</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
