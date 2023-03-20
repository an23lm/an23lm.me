import React from "react";
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
                <p className="resume">
                  <a
                    className="resume-link"
                    href="/Anselm Joseph - Resume.pdf"
                    target="_blank"
                  >
                    View Resume
                  </a>
                </p>
                <p className="Contact-card-link">
                  <a href="mailto:an23lm+from+website@gmail.com">
                    an23lm@gmail.com
                  </a>
                </p>
                <p className="Contact-card-link">
                  <a href="https://linkedin.com/in/an23lm">
                    linkedin.com/in/an23lm
                  </a>
                </p>
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
