import React from 'react'
import { useTheme } from 'react-jss';
import useStyles from './index.styles';

export default function Container(props) {
  const { children, className, id } = props
  const theme = useTheme();
  const classes = useStyles({ theme });
  return <div id={id} className={`${classes.container} ${className}`}>{children}</div>
}
