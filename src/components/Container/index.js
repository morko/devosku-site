import React from 'react'
import { useTheme } from 'react-jss'
import useStyles from './index.styles'

const Container = React.forwardRef((props, ref) => {
  const { el, children, className, id } = props
  const theme = useTheme()
  const classes = useStyles({ theme })

  switch (el) {
    case 'section':
      return (
        <section
          id={id}
          className={`${classes.container} ${className}`}
          ref={ref}
        >
          {children}
        </section>
      )
    default:
      return (
        <div id={id} className={`${classes.container} ${className}`} ref={ref}>
          {children}
        </div>
      )
  }
})

export default Container
