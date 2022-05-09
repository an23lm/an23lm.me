import userEvent from '@testing-library/user-event';
import React, { useEffect, useRef, useState } from 'react'
import './TopNav.css'

export default function TopNav({ isMenuOpen, onScrollCallback }) {
  const containerRef = useRef()

  const clientHeight = useRef(window.innerHeight);
  const clientWidth = useRef(window.innerWidth);
  const titleRef = useRef()
  const topLineRef = useRef()

  const [title, setTitle] = useState("ANSELM")
  const menuOpened = useRef(false)

  const onScroll = (scrollPercentage) => {
    scrollPercentage -= 1

    if (scrollPercentage >= 0 && (clientWidth.current > 800 || !menuOpened.current)) {
      titleRef.current.setAttribute("visible", "true")
      topLineRef.current.setAttribute("visible", "true")
    } else {
      titleRef.current.setAttribute("visible", "false")
      topLineRef.current.setAttribute("visible", "false")
    }
  }

  function onResize() {
    clientHeight.current = window.innerHeight
    clientWidth.current = window.innerWidth

    document.body.style.setProperty('--top-nav-size', `${containerRef.current.offsetHeight}px`);
    setTitle(clientWidth.current <= 800 ? "ANSELM" : "ANSELM JOSEPH")

    onScroll()
  }

  useEffect(() => {
    onResize()

    onScrollCallback(onScroll)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    };
  }, []);

  useEffect(() => {
    menuOpened.current = isMenuOpen
    onScroll()
  }, [isMenuOpen])

  return (
    <div className="TopNav-container" ref={containerRef}>
      <div className="TopNav-content">
        <h1 className="TopNav-title" ref={titleRef}>{title}</h1>
        <div className="TopNav-line" ref={topLineRef} />
      </div>
    </div>
  )
}
