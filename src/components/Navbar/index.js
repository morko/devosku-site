import React, { useState } from 'react'
import { Link } from 'gatsby'
import Logo from '../Logo'
import useScroll from '../../hooks/useScroll'
import Container from '../Container'
import useStyles from './index.styles'
import { useTheme } from 'react-jss'

const Navbar = () => {
  const theme = useTheme()
  const classes = useStyles({
    theme,
    scrollingDown,
    scrollTresholds,
    mobileMenuOpen,
  })

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollTresholds, scrollingDown] = useScroll({
    fixToTop: theme.headerHeight + theme.jumbotronHeight,
  })

  function scrollToId(id) {
    const el = document.getElementById(id)
    if (!el) {
      return
    }
    const rect = el.getBoundingClientRect()
    window.scrollTo(0, rect.top + window.scrollY - theme.fixedHeaderHeight - 10)
  }

  function createMenuLinks() {
    return (
      <>
        <li>
          <button className={classes.link} onClick={() => scrollToId('my-projects')}>
            Projects
          </button>
        </li>
        <li>
          <button className={classes.link} onClick={() => scrollToId('my-skills')}>
            Skills
          </button>
        </li>
      </>
    )
  }

  return (
    <header
      className={`${classes.header} ${
        scrollTresholds.fixToTop ? 'fixed' : ''
      } ${scrollingDown ? 'hide' : 'show'}`}
      role="navigation"
      aria-label="Main"
    >
      <nav className={classes.mobileMenu}>
        <ul>{createMenuLinks()}</ul>
      </nav>

      <Container className={`${classes.container} ${classes.fixedContainer}`}>
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
