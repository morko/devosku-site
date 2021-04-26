import React from 'react'
import Container from '../Container'

import Logo from '../Logo'
import { useTheme } from 'react-jss'
import useStyles from './index.styles'
import Navlinks from '../Navlinks'

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
            <Navlinks addHomeLink/>
          </ul>
        </section>
      </Container>
    </footer>
  )
}
