import React from 'react'
import useStyles from './Navlink.styles'
import { useTheme } from 'react-jss'
import { Link } from 'gatsby'
import { scrollToId } from '../../utils'

export default function Navlink(props) {
  const { children, className, to, elementId, onClick } = props

  const theme = useTheme()
  const classes = useStyles({
    theme,
  })

  return (
    <Link
      className={`${classes.link}${className ? ' ' + className : ''}`}
      to={to}
      onClick={(e) => {
        elementId && scrollToId(elementId)
        onClick && onClick(e)
      }}
    >
      {children}
    </Link>
  )
}
