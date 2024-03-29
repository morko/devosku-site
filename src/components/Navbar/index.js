import React, { useCallback, useState } from 'react'
import Logo from '../Logo'
import useScrollTresholds from '../../hooks/useScrollTresholds'
import useScrollDirection from '../../hooks/useScrollDirection'
import Container from '../Container'
import useStyles from './index.styles'
import { useTheme } from 'react-jss'
import Navlinks from '../Navlinks'
import { Link } from 'gatsby'

const Navbar = () => {
  const theme = useTheme()
  const classes = useStyles({
    theme,
  })

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const scrollTresholds = useScrollTresholds({
    fixToTop: theme.headerHeight + theme.jumbotronHeight,
  })
  const scrollingDown = useScrollDirection()

  const handleMobileMenuLinkClick = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  return (
    <header
      className={`${classes.header}${
        scrollTresholds.fixToTop ? ' fixed' : ''
      } ${scrollingDown ? 'hide' : 'show'}`}
      role="navigation"
      aria-label="Main"
    >
      <nav
        className={`${classes.mobileMenu}${
          mobileMenuOpen ? ' mobileMenuOpen' : ''
        }`}
      >
        <ul>
          <Navlinks onClick={handleMobileMenuLinkClick} />
        </ul>
      </nav>

      <Container className={`${classes.container}`}>
        <Link
          className={classes.brand}
          to="/"
          onClick={() => window.scrollTo(0, 0)}
        >
          <Logo className={classes.logo} />
          <h1 className={classes.title}>
            <span>Dev</span>
            <span>Osku</span>
          </h1>
        </Link>

        <nav className={classes.menu}>
          <ul>
            <Navlinks />
          </ul>
        </nav>

        <div
          className={`${classes.mobileMenuButton}${
            mobileMenuOpen ? ' mobileMenuOpen' : ''
          }`}
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
