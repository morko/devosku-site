import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Logo from '../Logo';
import useScroll from '../../hooks/useScroll';
import GitHubIcon from '../GitHubIcon';
import colors from '../../scss/_colors.scss';
import './index.scss';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [transparent, setTransparent] = useState(true);
  const [activeClass, setActiveClass] = useState('');
  const [transparentClass, setTransparentClass] = useState('is-transparent');
  const [shrinkedClass, setShrinkedClass] = useState('');
  const [hiddenClass, setHiddenClass] = useState('');
  const [scrollTresholds, scrollingDown] = useScroll({
    shrink: 120,
    hide: 700
  });

  useEffect(() => {
    active ? setActiveClass('is-active') : setActiveClass('');
  }, [active]);

  useEffect(() => {
    transparent
      ? setTransparentClass('is-transparent')
      : setTransparentClass('');
  }, [transparent]);

  useEffect(() => {
    if (scrollTresholds.shrink) {
      setShrinkedClass('is-shrinked');
      setTransparent(false);
    } else {
      setShrinkedClass('');
      setTransparent(true);
    }
    scrollTresholds.hide && scrollingDown
      ? setHiddenClass('is-minimized')
      : setHiddenClass('');
  }, [scrollTresholds, scrollingDown]);

  return (
    <nav
      className={`navbar ${transparentClass} ${shrinkedClass} ${hiddenClass}`}
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand navbar-item">
          <Link to="/" className="navbar-logo" title="Logo">
            <Logo />
          </Link>
          <h1 className="navbar-site-name">DevOsku</h1>
          <div
            className={`navbar-burger burger ${activeClass}`}
            role="button"
            tabIndex={0}
            onClick={() => {
              setActive(!active);
              setTransparent(!transparent);
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                setActive(!active);
                setTransparent(!transparent);
              }
            }}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenu" className={`navbar-menu ${activeClass}`}>
          <div className="navbar-end has-text-centered">
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/projects">
              Projects
            </Link>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
            <GitHubIcon href="https://github.com/morko" invert={transparent} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
