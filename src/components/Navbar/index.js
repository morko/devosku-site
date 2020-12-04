import React, { useState } from 'react'
import { Link } from 'gatsby'
import Logo from '../Logo'
import useScroll from '../../hooks/useScroll'
import Container from '../Container'
import useStyles from './index.styles'
import { useTheme } from 'react-jss'

const Navbar = ({ transparent = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollTresholds, scrollingDown] = useScroll({
    shrink: 120,
    minimize: 700,
  })

  const theme = useTheme()
  const classes = useStyles({
    theme,
    scrollingDown,
    scrollTresholds,
    mobileMenuOpen,
  })

  function createMenuLinks() {
    return (
      <>
        <li>
          <Link to="/">Projects</Link>
        </li>
        <li>
          <Link to="/">Skills</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </>
    )
  }

  return (
    <header className={`${classes.root}`} role="navigation" aria-label="Main">
      <nav className={classes.mobileMenu}>
        <ul>{createMenuLinks()}</ul>
      </nav>

      <Container className={classes.container}>
        <Link className={classes.brand} to="/" title="Home">
          <Logo className={classes.logo} />
          <h1 className={classes.title}>
            <span>Dev</span>
            <span>Osku</span>
          </h1>
        </Link>

        <nav className={classes.menu}>
          <ul>{createMenuLinks()}</ul>
        </nav>

        <div
          className={classes.mobileMenuButton}
          role="button"
          aria-label="Open menu"
          tabIndex={0}
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setMobileMenuOpen(!mobileMenuOpen)
            }
          }}
        >
          <span />
          <span />
          <span />
        </div>
      </Container>
    </header>
  )
}

export default Navbar
