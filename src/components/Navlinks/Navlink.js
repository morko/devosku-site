import React, { useCallback } from 'react'
import useStyles from './Navlink.styles'
import { useTheme } from 'react-jss'
import { scrollToId } from '../../utils'

export default function Navlink(props) {
  const { children, className, scrollToPosition, onClick } = props

  const theme = useTheme()
  const classes = useStyles({
    theme,
  })

  const handleClick = useCallback(
    (event) => {
      if (typeof scrollToPosition === 'string') {
        scrollToId(scrollToPosition)
      } else if (typeof scrollToPosition === 'number') {
        window.scrollTo(0, scrollToPosition)
      }
      if (onClick) {
        onClick(event)
      }
    },
    [scrollToPosition, onClick]
  )

  return (
    <button
      className={`${classes.link}${className ? ' ' + className : ''}`}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
