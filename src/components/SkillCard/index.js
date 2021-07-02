import React from 'react'
import { useTheme } from 'react-jss';
import useStyles from './index.styles';

export default function SkillCard(props) {
  const { icon, title } = props;

  const theme = useTheme();
  const classes = useStyles({ theme })

  return (
    <div className={classes.skillCard}>
      {React.cloneElement(icon, { className: classes.icon })}
      <span className={classes.title}>{title}</span>
    </div>
  )
}
