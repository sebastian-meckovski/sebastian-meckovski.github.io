import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.scss";
import { HashLink } from "react-router-hash-link";

export const Header = () => {
  const [showItems, setShowItems] = useState(false);
  const location = useLocation();
  const mobileHeaderRef = useRef();
  const burgerButtonRef = useRef();

  useLayoutEffect(() => {
    mobileHeaderRef.current.className =
      "App-header-mobile-closed-after-animation";
  }, []);

  useEffect(() => {
    const outsideClick = (e) => {
      if (
        mobileHeaderRef.current &&
        burgerButtonRef.current &&
        !mobileHeaderRef.current.contains(e.target) &&
        !burgerButtonRef.current.contains(e.target)
      ) {
        setShowItems(false);
      }
    };
    document.addEventListener("click", outsideClick);
    return () => {
      document.removeEventListener("click", outsideClick);
    };
  }, [showItems]);

  function onAnimationEnd(e) {
    if (e.animationName === "moveOut") {
      e.target.className = "App-header-mobile-closed-after-animation";
    }
  }

  const hrefName = {
    "": "Home",
    "about-me": "About me",
    expertise: "Expertise",
    portfolio: "Portfolio",
    contact: "Contact",
  };

  const returnLink = (href) => {
    if (location.pathname === "/") {
      return (
        <a
          href={`#${href}`}
          className={
            `#${href}` === location.hash || href === location.hash
              ? "active"
              : ""
          }
        >
          {hrefName[href]}
        </a>
      );
    } else {
      return <NavLink to={href}>{hrefName[href]}</NavLink>;
    }
  };

  return (
    <header className="App-header">
      <nav>
        <HashLink
          aria-label={"Sebastian Meckovski web page"}
          to={location.pathname === "/" ? "#" : "/"}
          className="App-header-left"
        >
          <span>Sebastian</span>
          <span>Meckovski</span>
        </HashLink>
        <button
          aria-label={
            showItems ? "close navigation menu" : "Open navigation menu"
          }
          role="navigation"
          ref={burgerButtonRef}
          title="burger menu button"
          type="button"
          className="burger-button"
          onClick={() => {
            setShowItems((prev) => {
              return !prev;
            });
          }}
        >
          <>
            <div
              className={`burger-button-stripe-1-${
                showItems ? "open" : "closed"
              }`}
            ></div>
            <div
              className={`burger-button-stripe-2-${
                showItems ? "open" : "closed"
              }`}
            ></div>
            <div
              className={`burger-button-stripe-3-${
                showItems ? "open" : "closed"
              }`}
            ></div>
          </>
        </button>
        <div className="App-header-right">
          {returnLink("")}
          {returnLink("about-me")}
          {returnLink("expertise")}
          {returnLink("portfolio")}
          {returnLink("contact")}
        </div>
        <div
          onAnimationEnd={onAnimationEnd}
          ref={mobileHeaderRef}
          className={`App-header-mobile-${showItems ? "open" : "closed"}`}
          onClick={() => {
            setShowItems(false);
          }}
        >
          {returnLink("")}
          {returnLink("about-me")}
          {returnLink("expertise")}
          {returnLink("portfolio")}
          {returnLink("contact")}
        </div>
      </nav>
    </header>
  );
};
