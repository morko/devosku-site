import React from 'react'
import { useTheme } from 'react-jss'
import useStyles from './index.styles';

export default function SectionHeader(props) {
  const { children, className, icon } = props

  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <header className={`${classes.sectionHeader} ${className || ''}`}>
      <span className={classes.icon}>{icon}</span>
      <span className={classes.text}>{children}</span>
    </header>
  )
}
