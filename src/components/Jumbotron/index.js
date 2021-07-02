import React from 'react'
import { useTheme } from 'react-jss'
import Container from '../Container'
import useStyles from './index.styles'
import backgroundImg from '../../img/hero-background.png'

export default function Jumbotron(props) {
  const { className = '', children } = props

  const theme = useTheme()
  const classes = useStyles({ theme, backgroundImg })

  return (
    <section className={`${classes.jumbotron} ${className}`}>
      <div className={classes.backgroundContainer} />
      <Container className={classes.innerContainer}>{children}</Container>
    </section>
  )
}
