import React from 'react'
import { useTheme } from 'react-jss'
import useStyles from './index.styles'
import useWindowDimensions from '../../hooks/useWindowDimensions'

const Project = React.forwardRef((props, ref) => {
  const {
    slug,
    className,
    title,
    featuredImage,
    description,
    html,
    technologies,
    links,
  } = props

  const maxMobileWidth = 900

  const theme = useTheme()
  const classes = useStyles({ maxMobileWidth, theme })

  if (!ref) ref = React.createRef()

  const windowDimensions = useWindowDimensions()

  return (
    <article ref={ref} className={`${classes.project} ${className || ''}`}>
      <div className={classes.textbox}>
        <h3
          className={`anchor ${classes.title}`}
          id={slug.substr(1, slug.length - 2).replace(/\//g, '_')}
        >
          {title}
        </h3>

        {windowDimensions.width < maxMobileWidth && (
          <img
            className={classes.mobileImage}
            src={
              typeof featuredImage === 'string'
                ? featuredImage
                : featuredImage.childImageSharp.fluid.src
            }
            alt={title}
          ></img>
        )}
        <div className={classes.description}>{description}</div>

        <div
          className={classes.text}
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>

        <div className={classes.technologies}>
          <h4>Technologies Used</h4>
          <ul>
            {technologies.map((technology) => {
              return (
                <li key={technology.text}>
                  <a
                    href={technology.href}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {technology.text}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        {links && (
          <div className={classes.links}>
            <h4>Links</h4>
            <ul>
              {links.map((link) => {
                return (
                  <li className={classes.link} key={link.text}>
                    <a
                      href={link.href}
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      {link.text}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
      {windowDimensions.width >= maxMobileWidth && (
        <div className={classes.imagebox}>
          <img
            className={classes.desktopImage}
            src={
              typeof featuredImage === 'string'
                ? featuredImage
                : featuredImage.childImageSharp.fluid.src
            }
            alt={title}
          ></img>
        </div>
      )}
    </article>
  )
})

export default Project
