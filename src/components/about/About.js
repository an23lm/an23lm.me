import React, { useEffect, useRef, useState } from "react";
import "./About.css";

export default function About() {
  const clientWidth = useRef(window.innerWidth);

  const containerRef = useRef();
  const moveRightListRef = useRef();
  const moveLeftListRef = useRef();
  const moveUpListRef = useRef();

  const [isMobile, setIsMobile] = useState(false)

  function onResize() {
    clientWidth.current = window.innerWidth
    setIsMobile(clientWidth.current <= 800)

    setListWidths()
  }

  function setListWidths() {
    if (clientWidth.current > 800 && moveRightListRef.current) {
      let rightWidth = moveRightListRef.current.offsetWidth;
      let leftWidth = moveLeftListRef.current.offsetWidth;
      setListWidth(rightWidth, leftWidth);
    } else if (moveUpListRef.current) {
      setListHeight(moveUpListRef.current.offsetHeight);
    }
  }

  useEffect(() => {
    setListWidths()
  }, [moveRightListRef.current, moveLeftListRef.current, moveUpListRef.current])

  useEffect(() => {
    onResize()

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    };
  }, []);
  
  function setListWidth(rightList, leftList) {
    document.body.style.setProperty(
      "--move-right-list-width",
      `${rightList}px`
    );
    document.body.style.setProperty("--move-left-list-width", `${leftList}px`);
  }

  function setListHeight(height) {
    document.body.style.setProperty("--move-up-list-height", `${height}px`);
  }

  const itemsHorizontal = () => (
    <div>
      <div className="About-list Move-right" ref={moveRightListRef}>
        <p className="About-list-item">iOS,</p>
        <p className="About-list-item">iPadOS,</p>
        <p className="About-list-item">Android,</p>
        <p className="About-list-item">React Native,</p>
        <p className="About-list-item">Web,</p>
        <p className="About-list-item">React,</p>
        <p className="About-list-item">macOS</p>
      </div>
      <div className="About-list Move-left" ref={moveLeftListRef}>
        <p className="About-list-item">Google Cloud,</p>
        <p className="About-list-item">Firebase,</p>
        <p className="About-list-item">MongoDB,</p>
        <p className="About-list-item">Spring Boot</p>
      </div>
    </div>
  );

  const itemsVertical = () => (
    <div className="About-list-wrapper">
      <div className="About-list Move-up" ref={moveUpListRef}>
        <p className="About-list-item">iOS,</p>
        <p className="About-list-item">iPadOS,</p>
        <p className="About-list-item">Android,</p>
        <p className="About-list-item">React Native,</p>
        <p className="About-list-item">Web,</p>
        <p className="About-list-item">React,</p>
        <p className="About-list-item">macOS,</p>
        <p className="About-list-item">Google Cloud,</p>
        <p className="About-list-item">Firebase,</p>
        <p className="About-list-item">MongoDB,</p>
        <p className="About-list-item">Spring Boot</p>
      </div>
      {/* <div className="About-list-clip"></div> */}
    </div>
  );

  return (
    <div className="About-container" ref={containerRef}>
      <div className="About-content">
        <div className="About-title-wrapper">
          <h1 className="Title-font About-title">Experienced in</h1>
        </div>
        { isMobile ? itemsVertical() : itemsHorizontal() } 
      </div>
    </div>
  );
}
