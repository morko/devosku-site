import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Logo from "../Logo";
import useScroll from "../../hooks/useScroll";
import Container from "../Container";
import "./index.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [activeCls, setActiveCls] = useState("");
  const [shrinkCls, setShrinkCls] = useState("");
  const [minCls, setMinCls] = useState("");
  const [scrollTresholds, scrollingDown] = useScroll({
    shrink: 120,
    min: 700
  });

  useEffect(() => {
    active ? setActiveCls("is-active") : setActiveCls("");
  }, [active]);

  useEffect(() => {
    if (scrollTresholds.shrink) {
      setShrinkCls("is-shrinked");
    } else {
      setShrinkCls("");
    }
    scrollTresholds.min && scrollingDown
      ? setMinCls("is-minimized")
      : setMinCls("");
  }, [scrollTresholds, scrollingDown]);

  return (
    <nav
      className={`navbar ${shrinkCls} ${minCls}`}
      role="navigation"
      aria-label="Main"
    >
      <Container>
        <Link className="brand" to="/" title="Home">
          <Logo className="logo" />
          <h1 className="title">
            <span className="left">Dev</span>
            <span className="right">Osku</span>
          </h1>
        </Link>

        <ul className={`menu ${activeCls}`}>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>

        <div
          className={`menu-button ${activeCls}`}
          role="button"
          aria-label="Open menu"
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
      </Container>
    </nav>
  );
};

export default Navbar;
