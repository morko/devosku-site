import React from 'react'
import { useTheme } from 'react-jss'
import useStyles from './index.styles'
import ClipLoader from 'react-spinners/ClipLoader'

export default function Button(props) {
  const { loading, ...forwardedProps } = props
  const { children, className } = forwardedProps

  const theme = useTheme()
  const classes = useStyles({ theme, loading })

  return (
    <button {...forwardedProps} className={`${classes.button} ${className || ''}`}>
      {children}

      {loading && (
        <div className={classes.loaderWrapper}>
          <ClipLoader
            color={theme.primaryColor}
            speedMultiplier="0.5"
            size="25px"
            margin="0"
          />
        </div>
      )}
    </button>
  )
}
