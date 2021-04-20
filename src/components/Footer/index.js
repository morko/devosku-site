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
        <section className={`${classes.column} ${classes.columnLeft}`}>
          <Logo className={classes.logo} />
        </section>

        <section className={classes.column}>
          <p>This website is powered by Gatsby.js.</p>
          <p>The design and implementation is courtesy of Oskari Pöntinen.</p>
        </section>

        <section className={`${classes.column} ${classes.columnRight}`}>
          {/* <h3 className={classes.columnHeader}>Site Index</h3> */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">My Projects</Link>
            </li>
            <li>
              <Link to="/">My Skills</Link>
            </li>
          </ul>
        </section>
      </Container>
    </footer>
  )
}
