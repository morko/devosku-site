import React, { useRef } from 'react'
import { useTheme } from 'react-jss'
import Container from '../Container';
import useStyles from './index.styles';

export default function Jumbotron(props) {
  const { className = '', variant = 'full', children, } = props

  const theme = useTheme();
  const classes = useStyles({ theme, variant});

  return (
    <section className={`${classes.jumbotron} ${className}`}>
      <Container className={classes.innerContainer}>{children}</Container>
    </section>
  )
}