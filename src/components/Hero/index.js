import React from 'react'
import { useTheme } from 'react-jss'
import useStyles from './index.styles'
import MainIllustration from '../MainIllustration'
import { scrollToId } from '../../utils'

export default function Hero(props) {
  const { title, subtitle } = props

  const theme = useTheme()
  const classes = useStyles({ theme })

  return (
    <>
    <div className={classes.textbox}>
      <h2 className={classes.title}>{title}</h2>
      <h3 className={classes.subtitle}>{subtitle}</h3>
      <button className={classes.callToAction} onClick={() => scrollToId('my-projects')}>
        See My Projects
      </button>
    </div>
    <MainIllustration className={classes.illustration}/>
    </>
  )
}
