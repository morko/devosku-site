import React from 'react'
import { useTheme } from 'react-jss';
import useStyles from './index.styles';

export default function Container({ children, className = '' }) {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return <div className={`${classes.container} ${className}`}>{children}</div>
}
