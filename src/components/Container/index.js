import React from 'react'
import { useTheme } from 'react-jss';
import useStyles from './index.styles';

const Container = React.forwardRef((props, ref) => {
  const { children, className, id } = props
  const theme = useTheme();
  const classes = useStyles({ theme });
  return <div id={id} className={`${classes.container} ${className}`} ref={ref}>{children}</div>
})

export default Container;