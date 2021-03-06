import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Logo from '../Logo'
import useScroll from '../../hooks/useScroll'
import Container from '../Container'
import './index.scss'

const Navbar = ({ transparent = false }) => {
  const [active, setActive] = useState(false)
  const [activeCls, setActiveCls] = useState('')
  const [shrinkCls, setShrinkCls] = useState('')
  const [topCls, setTopCls] = useState(transparent ? 'is-transparent' : '')
  const [minCls, setMinCls] = useState('')
  const [scrollTresholds, scrollingDown] = useScroll({
    shrink: 120,
    min: 700,
  })

  useEffect(() => {
    active ? setActiveCls('is-active') : setActiveCls('')
  }, [active])

  useEffect(() => {
    if (transparent) {
      if (!scrollTresholds.shrink && !scrollTresholds.min) {
        setTopCls('is-transparent')
      } else {
        setTopCls('')
      }
    }
    if (scrollTresholds.shrink) {
      setShrinkCls('is-shrinked')
    } else {
      setShrinkCls('')
    }
    scrollTresholds.min && scrollingDown
      ? setMinCls('is-minimized')
      : setMinCls('')
  }, [scrollTresholds, scrollingDown, transparent])

  function createMenuLinks() {
    return (
      <>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
      </>
    )
  }

  return (
    <nav
      className={`navbar ${topCls} ${shrinkCls} ${minCls}`}
      role="navigation"
      aria-label="Main"
    >
      <ul className={`mobile-menu ${activeCls}`}>{createMenuLinks()}</ul>

      <Container>
        <Link className="brand" to="/" title="Home">
          <Logo className="logo" />
          <h1 className="title">
            <span className="left">Dev</span>
            <span className="right">Osku</span>
          </h1>
        </Link>

        <ul className={`menu ${activeCls}`}>{createMenuLinks()}</ul>

        <div
          className={`menu-button ${activeCls}`}
          role="button"
          aria-label="Open menu"
          tabIndex={0}
          onClick={() => {
            setActive(!active)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setActive(!active)
            }
          }}
        >
          <span />
          <span />
          <span />
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
