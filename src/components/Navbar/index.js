import React, { useState } from 'react'
import Logo from '../Logo'
import useScroll from '../../hooks/useScroll'
import Container from '../Container'
import useStyles from './index.styles'
import { useTheme } from 'react-jss'
import Navlinks from '../Navlinks'

const Navbar = () => {
  const theme = useTheme()
  const classes = useStyles({
    theme,
  })

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollTresholds, scrollingDown] = useScroll({
    fixToTop: theme.headerHeight + theme.jumbotronHeight,
  })

  return (
    <header
      className={`${classes.header} ${
        scrollTresholds.fixToTop ? 'fixed' : ''
      } ${scrollingDown ? 'hide' : 'show'}`}
      role="navigation"
      aria-label="Main"
    >
      <nav className={classes.mobileMenu}>
        <ul>
          <Navlinks />
        </ul>
      </nav>

      <Container className={`${classes.container}`}>
        <button className={classes.brand} onClick={() => window.scrollTo(0, 0)}>
          <Logo className={classes.logo} />
          <h1 className={classes.title}>
            <span>Dev</span>
            <span>Osku</span>
          </h1>
        </button>

        <nav className={classes.menu}>
          <ul>
            <Navlinks/>
          </ul>
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
