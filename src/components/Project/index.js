import React from 'react'
import { useTheme } from 'react-jss'
import useStyles from './index.styles'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

export default function Project(props) {
  const { children, className, title, featuredImage } = props

  const theme = useTheme()
  const classes = useStyles({ theme })

  return (
    <article className={`${classes.project} ${className || ''}`}>
      <div className={classes.textbox}>
        <h2 className={classes.title}>{title}</h2>
        <div className={classes.text}>{children}</div>
      </div>
      <div className={classes.imagebox}>
        <PreviewCompatibleImage
          imageInfo={{ alt: title, image: featuredImage }}
        ></PreviewCompatibleImage>
      </div>
    </article>
  )
}
