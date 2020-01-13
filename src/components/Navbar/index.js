import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Logo from "../Logo";
import useScroll from "../../hooks/useScroll";
import "./index.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [activeClass, setActiveClass] = useState("");
  const [shrinkedClass, setShrinkedClass] = useState("");
  const [hiddenClass, setHiddenClass] = useState("");
  const [scrollTresholds, scrollingDown] = useScroll({
    shrink: 120,
    hide: 700
  });

  useEffect(() => {
    active ? setActiveClass("is-active") : setActiveClass("");
  }, [active]);

  useEffect(() => {
    if (scrollTresholds.shrink) {
      setShrinkedClass("is-shrinked");
    } else {
      setShrinkedClass("");
    }
    scrollTresholds.hide && scrollingDown
      ? setHiddenClass("is-minimized")
      : setHiddenClass("");
  }, [scrollTresholds, scrollingDown]);

  return (
    <nav
      className={`navbar is-fixed-top ${shrinkedClass} ${hiddenClass}`}
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/" title="Home">
            <Logo className="logo" />
          </Link>
          <Link className="navbar-item" to="/" title="Home">
            <h1 className="site-name">
              <span className="left">Dev</span>
              <span className="right">Osku</span>
            </h1>
          </Link>
          <div
            className={`navbar-burger burger ${activeClass}`}
            role="button"
            tabIndex={0}
            onClick={() => {
              setActive(!active);
            }}
            onKeyDown={e => {
              if (e.key === "Enter") {
                setActive(!active);
              }
            }}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenu" className={`navbar-menu is-size-5 ${activeClass}`}>
          <div className="navbar-end has-text-centered">
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
            <Link className="navbar-item" to="/projects">
              Projects
            </Link>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
