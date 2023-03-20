import { useCallback, useEffect, useRef, useState } from "react";
import "./LeftNav.css";

export default function LeftNav({ didMenuOpen, onScrollCallback, scrollToY }) {
  const containerRef = useRef();
  const contentRef = useRef();
  const scrollHelpRef = useRef();
  const menuItemsRef = useRef();

  const homeRef = useRef();
  const aboutRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();

  const menuButtonRef = useRef();
  const line1Ref = useRef();
  const line2Ref = useRef();
  const line3Ref = useRef();

  const clientHeight = useRef(window.innerHeight);
  const clientWidth = useRef(window.innerWidth);
  const prevClientWidth = useRef(0);
  // const lastScrollPos = useRef(0);
  // const snapToTimeout = useRef(null)

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const selectHome = useCallback((scrollPercentage) => {
    if (clientWidth.current <= 800) {
      scrollPercentage = 1;
    }

    setLeftNavItemsOpacity(scrollPercentage);

    document.body.style.setProperty("--left-nav-margin-top", "0pt");

    homeRef.current.setAttribute("active", "true");
    aboutRef.current.setAttribute("active", "false");
    workRef.current.setAttribute("active", "false");
    contactRef.current.setAttribute("active", "false");
  }, []);

  const selectAbout = useCallback(() => {
    setLeftNavItemsOpacity(1);

    document.body.style.setProperty("--left-nav-margin-top", `-100pt`);

    homeRef.current.setAttribute("active", "false");
    aboutRef.current.setAttribute("active", "true");
    workRef.current.setAttribute("active", "false");
    contactRef.current.setAttribute("active", "false");
  }, []);

  const selectWork = useCallback(() => {
    setLeftNavItemsOpacity(1);

    document.body.style.setProperty("--left-nav-margin-top", `-200pt`);

    homeRef.current.setAttribute("active", "false");
    aboutRef.current.setAttribute("active", "false");
    workRef.current.setAttribute("active", "true");
    contactRef.current.setAttribute("active", "false");
  }, []);

  const selectContact = useCallback(() => {
    setLeftNavItemsOpacity(1);

    document.body.style.setProperty("--left-nav-margin-top", `-300pt`);

    homeRef.current.setAttribute("active", "false");
    aboutRef.current.setAttribute("active", "false");
    workRef.current.setAttribute("active", "false");
    contactRef.current.setAttribute("active", "true");
  }, []);

  const onScroll = useCallback(
    (scrollPercentage) => {
      if (scrollPercentage < 0.5) {
        selectHome(scrollPercentage);
      } else if (scrollPercentage < 2.5) {
        selectAbout();
      } else if (scrollPercentage < 3.5) {
        selectWork();
      } else {
        selectContact();
      }

      // clearTimeout(snapToTimeout.current)
      // snapToTimeout.current = setTimeout(snapToPosition.bind(null, lastScrollPos.current < scrollPercentage, scrollPercentage), 100);
      // lastScrollPos.current = scrollPercentage
    },
    [selectAbout, selectContact, selectHome, selectWork]
  );

  // function snapToPosition(scrollDown, scrollPercentage) {
  // 	let scrollToPos = scrollPercentage * clientHeight.current;

  // 	if (scrollPercentage >= 0.3 && scrollPercentage <= 0.6)
  // 		scrollToPos = scrollDown ? 1 * clientHeight.current : 0;
  // 	else if (scrollPercentage >= 2.3 && scrollPercentage <= 2.6)
  // 		scrollToPos = scrollDown
  // 			? 2.6 * clientHeight.current
  // 			: 1 * clientHeight.current;
  // 	else if (scrollPercentage >= 3.4 && scrollPercentage <= 3.6)
  // 		scrollToPos = scrollDown
  // 			? 3.6 * clientHeight.current
  // 			: 2.6 * clientHeight.current;

  // 	animateScroll.scrollTo(scrollToPos, { duration: 500 });
  // }

  const onResize = useCallback(() => {
    clientHeight.current = window.innerHeight;
    clientWidth.current = window.innerWidth;

    if (prevClientWidth.current !== clientWidth.current) {
      prevClientWidth.current = clientWidth.current;
      setIsMenuOpen(clientWidth.current <= 800 ? false : true);
    }
  }, []);

  function setLeftNavItemsOpacity(opacity) {
    document.body.style.setProperty("--left-nav-items-opacity", opacity);
  }

  useEffect(() => {
    onResize();
    onScrollCallback(onScroll);
    window.addEventListener("resize", onResize);
    selectHome();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [onResize, onScroll, onScrollCallback, selectHome]);

  useEffect(() => {
    if (isMenuOpen) openMenu();
    else closeMenu();
    didMenuOpen(isMenuOpen);
  }, [didMenuOpen, isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openMenu = () => {
    contentRef.current.setAttribute("visible", "true");
    containerRef.current.setAttribute("visible", "true");
    menuItemsRef.current.setAttribute("visible", "true");
    scrollHelpRef.current.setAttribute("visible", "true");

    if (menuButtonRef.current) {
      menuButtonRef.current.setAttribute("right", "true");
      line1Ref.current.setAttribute("opened", "true");
      line2Ref.current.setAttribute("opened", "true");
      line3Ref.current.setAttribute("opened", "true");
    }
  };

  const closeMenu = () => {
    contentRef.current.setAttribute("visible", "false");
    menuItemsRef.current.setAttribute("visible", "false");
    scrollHelpRef.current.setAttribute("visible", "false");

    if (menuButtonRef.current) {
      menuButtonRef.current.setAttribute("right", "false");
      line1Ref.current.setAttribute("opened", "false");
      line2Ref.current.setAttribute("opened", "false");
      line3Ref.current.setAttribute("opened", "false");
    }

    setTimeout(() => {
      containerRef.current.setAttribute("visible", "false");
    }, 1000);
  };

  const navBaseOnClick = (e) => {
    e.stopPropagation();
    if (clientWidth.current <= 800) toggleMenu();
  };

  const menuIconOnClick = (e) => {
    e.stopPropagation();
    if (clientWidth.current <= 800) toggleMenu();
  };

  const homeLabelOnClick = (e) => {
    e.stopPropagation();
    selectHome();
    scrollToY(0);

    if (clientWidth.current <= 800)
      setTimeout(() => {
        toggleMenu();
      }, 500);
  };

  const aboutLabelOnClick = (e) => {
    e.stopPropagation();
    selectAbout();
    if (clientWidth.current <= 800) scrollToY(clientHeight.current * 1.3);
    else scrollToY(clientHeight.current * 1);

    if (clientWidth.current <= 800)
      setTimeout(() => {
        toggleMenu();
      }, 500);
  };

  const workLabelOnClick = (e) => {
    e.stopPropagation();
    selectWork();
    scrollToY(clientHeight.current * 3.0);

    if (clientWidth.current <= 800)
      setTimeout(() => {
        toggleMenu();
      }, 500);
  };

  const contactLabelOnClick = (e) => {
    e.stopPropagation();
    selectContact();
    scrollToY(clientHeight.current * 4.0);

    if (clientWidth.current <= 800)
      setTimeout(() => {
        toggleMenu();
      }, 500);
  };

  const MenuItems = () => (
    <div className="Items" ref={menuItemsRef} visible={"false"}>
      <div
        className="Item"
        label="home"
        ref={homeRef}
        active={"true"}
        onClick={homeLabelOnClick}
      >
        <div className="home-circle" />
      </div>
      <div className="Item" ref={aboutRef} onClick={aboutLabelOnClick}>
        <p>About</p>
      </div>
      <div className="Item" ref={workRef} onClick={workLabelOnClick}>
        <p>Work</p>
      </div>
      <div className="Item" ref={contactRef} onClick={contactLabelOnClick}>
        <p>Contact</p>
      </div>
    </div>
  );

  const MenuButton = () =>
    clientWidth.current <= 800 ? (
      <div className="Menu-icon" onClick={menuIconOnClick} ref={menuButtonRef}>
        {/* <p className="Menu-text">Menu</p> */}
        <svg width="40" height="40" viewBox="0 0 100 100">
          <path
            ref={line1Ref}
            className="line line1"
            opened={"false"}
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path
            ref={line2Ref}
            className="line line2"
            opened={"false"}
            d="M 20,50 H 80"
          />
          <path
            ref={line3Ref}
            className="line line3"
            opened={"false"}
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </div>
    ) : null;

  return (
    <div className="Nav-container" ref={containerRef}>
      <div className="Nav-base" onClick={navBaseOnClick} ref={contentRef}>
        {MenuButton()}
        <div className="Scroll-help" ref={scrollHelpRef} visible={"false"}>
          <div className="Scroll-line" />
          {/* <p className="Scroll-text">SCROLL</p> */}
        </div>
        {MenuItems()}
      </div>
    </div>
  );
}
