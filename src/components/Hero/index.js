import React from 'react'
import { useTheme } from 'react-jss'
import useStyles from './index.styles'
import Button from '../Button'
import MainIllustration from '../MainIllustration'

export default function Hero(props) {
  const { title, subtitle } = props

  const theme = useTheme()
  const classes = useStyles({ theme })

  return (
    <>
    <div className={classes.textbox}>
      <h2 className={classes.title}>{title}</h2>
      <h3 className={classes.subtitle}>{subtitle}</h3>
      <Button className={classes.callToAction}>See My Projects</Button>
    </div>
    <MainIllustration className={classes.illustration}/>
    </>
  )
}
