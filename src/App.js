import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import LeftNav from "./components/left-nav/LeftNav";
import TopNav from "./components/top-nav/TopNav";
import Work from "./components/work/Work";
import WorkDetailModal from "./components/WorkDetailModal/WorkDetailModal";

function App() {
  const appRef = useRef();
  const appContentRef = useRef();
  const appPsudoRef = useRef();

  const homeScrollPercentage = useRef(null);
  const aboutScrollPercentage = useRef(null);
  const workScrollPercentage = useRef(null);
  const contactScrollPercentage = useRef(null);
  const topNavOnScroll = useRef(() => null);
  const leftNavOnScroll = useRef(() => null);

  const clientHeight = useRef(window.innerHeight);
  const clientWidth = useRef(window.innerWidth);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isWorkModalVisible, setWorkModalVisible] = useState(false);
  const [workId, setWorkId] = useState(0);
  const workContainerHeight = useRef(0);
  const workCardsHeight = useRef(0);

  function setLeftNavSize() {
    document.body.style.setProperty(
      "--left-nav-size",
      clientWidth.current <= 800 ? "0pt" : "200pt"
    );
  }

  const scrollToPosition = useCallback((y = 0) => {
    window.scrollTo(0, y);
  }, []);

  const setTargetProperties = useCallback((scrollPercentage) => {
    setHomeTargetProperties(scrollPercentage);
    setAboutTargetProperties(scrollPercentage);
    setWorkTargetProperties(scrollPercentage);
    setContactTargetProperties(scrollPercentage);
  }, []);

  const onScroll = useCallback(() => {
    // let scrollPercentage = appRef.current.scrollTop / clientHeight.current;
    let scrollPercentage = window.scrollY / clientHeight.current;

    topNavOnScroll.current(scrollPercentage);
    leftNavOnScroll.current(scrollPercentage);
    setTargetProperties(scrollPercentage);
  }, [setTargetProperties]);

  function setHomeTargetProperties(scrollPercentage) {
    // window 0.0 to 0.5
    if (scrollPercentage < 0) scrollPercentage = 0;
    else if (scrollPercentage > 1) scrollPercentage = 1;

    if (scrollPercentage === homeScrollPercentage.current) return;

    homeScrollPercentage.current = scrollPercentage;

    document.body.style.setProperty(
      "--home-translate-y",
      `${scrollPercentage * -100}%`
    );
    document.body.style.setProperty("--home-scale", 1 - scrollPercentage / 2);
    document.body.style.setProperty("--home-opacity", 1 - scrollPercentage);
    document.body.style.setProperty(
      "--home-zIndex",
      scrollPercentage > 1 ? 100 : 1000
    );
  }

  function setAboutTargetProperties(scrollPercentage) {
    // window 0.5 to 2.5
    scrollPercentage -= 0.5;

    if (scrollPercentage <= 0) scrollPercentage = 0;
    else if (scrollPercentage >= 2) scrollPercentage = 2;
    else scrollPercentage /= 2;

    if (scrollPercentage === aboutScrollPercentage.current) return;

    aboutScrollPercentage.current = scrollPercentage;

    let scale = 0;
    let opacity = 0;
    let zIndex = scrollPercentage <= 0 || scrollPercentage >= 1 ? 100 : 1000;
    let translate = -110 + scrollPercentage * 2 * 110;
    let translateY = -70 + scrollPercentage * 2 * 70;

    if (scrollPercentage < 0.1) {
      scale = 0.8 + 0.2 * (scrollPercentage * 10);
      opacity = scrollPercentage * 10;
    } else if (scrollPercentage >= 0.1 && scrollPercentage <= 0.9) {
      scale = 1;
      opacity = 1;
    } else {
      scale = 0.8 + 0.2 * ((1 - scrollPercentage) * 10);
      opacity = (1 - scrollPercentage) * 10;
    }

    document.body.style.setProperty("--about-container-scale", scale);
    document.body.style.setProperty("--about-container-opacity", opacity);
    document.body.style.setProperty("--about-container-zindex", zIndex);
    document.body.style.setProperty(
      "--about-list-translate-right",
      `${translate}%`
    );
    document.body.style.setProperty(
      "--about-list-translate-left",
      `${-translate}%`
    );
    document.body.style.setProperty(
      "--about-list-translate-up",
      `${-translateY}%`
    );
  }

  function setWorkTargetProperties(scrollPercentage) {
    // window 2.5 to 3.5
    scrollPercentage -= 2.5;
    if (scrollPercentage <= 0) scrollPercentage = 0;
    else if (scrollPercentage >= 1) scrollPercentage = 1;

    if (scrollPercentage === workScrollPercentage.current) return;

    workScrollPercentage.current = scrollPercentage;

    let scale = 0;
    let opacity = 0;
    let zIndex = scrollPercentage <= 0 || scrollPercentage >= 1 ? 100 : 1000;
    let translateY = 0;
    let diff = workCardsHeight.current - workContainerHeight.current;
    translateY = diff > 0 ? (diff + 400) * (scrollPercentage - 0.1) : 0;

    if (scrollPercentage < 0.1) {
      scale = 0.8 + 0.2 * (scrollPercentage * 10);
      opacity = scrollPercentage * 10;
    } else if (scrollPercentage >= 0.1 && scrollPercentage <= 0.9) {
      scale = 1;
      opacity = 1;
      zIndex = 1000;
    } else {
      scale = 0.8 + 0.2 * ((1 - scrollPercentage) * 10);
      opacity = (1 - scrollPercentage) * 10;
    }

    document.body.style.setProperty("--work-container-scale", scale);
    document.body.style.setProperty("--work-container-opacity", opacity);
    document.body.style.setProperty("--work-container-zindex", zIndex);
    document.body.style.setProperty(
      "--work-container-translatey",
      `-${translateY}px`
    );
  }

  function setContactTargetProperties(scrollPercentage) {
    // window 3.5 to 4.5
    scrollPercentage -= 3.5;
    if (scrollPercentage <= 0) scrollPercentage = 0;
    else if (scrollPercentage >= 1) scrollPercentage = 1;

    if (scrollPercentage === contactScrollPercentage.current) return;

    contactScrollPercentage.current = scrollPercentage;

    let scale = 0;
    let opacity = 0;
    let zIndex = scrollPercentage <= 0 || scrollPercentage >= 1 ? 100 : 1000;

    if (scrollPercentage < 0.1) {
      scale = 0.8 + 0.2 * (scrollPercentage * 10);
      opacity = scrollPercentage * 10;
    } else if (scrollPercentage >= 0.1) {
      scale = 1;
      opacity = 1;
      zIndex = 1000;
    }

    document.body.style.setProperty("--contact-container-scale", scale);
    document.body.style.setProperty("--contact-container-opacity", opacity);
    document.body.style.setProperty("--contact-container-zindex", zIndex);
  }

  useEffect(() => {
    function onResize() {
      clientHeight.current = window.innerHeight;
      clientWidth.current = window.innerWidth;

      setLeftNavSize();
      onScroll();
    }

    setLeftNavSize();
    onResize();

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [onScroll]);

  useEffect(() => {
    scrollToPosition(1);
  }, [scrollToPosition]);

  useEffect(() => {
    window.document.body.setAttribute("background", `${isWorkModalVisible}`);
    appRef.current.setAttribute("background", `${isWorkModalVisible}`);
    appContentRef.current.setAttribute("background", `${isWorkModalVisible}`);
  }, [isWorkModalVisible]);

  const workEntryOnClick = (workId) => {
    setWorkId(workId);
    setWorkModalVisible(true);
  };

  return (
    <div className="App" ref={appRef}>
      <div className="App-content-wrapper">
        <div className="App-psudo" ref={appPsudoRef} />
        <div className="App-content" ref={appContentRef}>
          <TopNav
            isMenuOpen={isMenuOpen}
            onScrollCallback={(os) => (topNavOnScroll.current = os)}
          />
          <LeftNav
            didMenuOpen={setIsMenuOpen}
            onScrollCallback={(os) => (leftNavOnScroll.current = os)}
            scrollToY={scrollToPosition}
          />
          <Home />
          <About />
          <Work
            setWorkContainerHeight={(h) => (workContainerHeight.current = h)}
            setWorkCardsHeight={(h) => (workCardsHeight.current = h)}
            workEntryOnClick={workEntryOnClick}
          />
          <Contact />
        </div>
        <WorkDetailModal
          showModal={isWorkModalVisible}
          workId={workId}
          setModalOpen={setWorkModalVisible}
        />
      </div>
    </div>
  );
}

export default App;
