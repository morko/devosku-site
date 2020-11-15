import React from 'react'
import { Link } from 'gatsby'
import Container from '../Container'

import Logo from '../Logo'
import { useTheme } from 'react-jss'
import useStyles from './index.styles'

export default function Footer() {
  const theme = useTheme()
  const classes = useStyles({ theme })

  return (
    <footer className={classes.footer}>
      <Container className={classes.footerInner}>
        <section className={classes.column}>
          <Logo />
        </section>

        <section className={classes.column}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Projects</Link>
            </li>
            <li>
              <Link to="/">Technologies</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </section>

        <section className={classes.column}>
          <ul>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </section>
      </Container>
    </footer>
  )
}
