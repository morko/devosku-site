import React from 'react'
import { useTheme } from 'react-jss'
import useStyles from './index.styles';

export default function Button(props) {
  const { children, className } = props;

  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <button {...props} className={`${classes.button} ${className || ''}`} >
      {children}
    </button>
  )
}
