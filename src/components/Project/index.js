import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from 'react-jss'
import useStyles from './index.styles'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Project = React.forwardRef((props, ref) => {
  const {
    className,
    title,
    featuredImage,
    description,
    html,
    technologies,
    links,
  } = props

  const theme = useTheme()
  const classes = useStyles({ theme })

  const [imageLoaded, setImageLoaded] = useState(false)

  const textRef = useRef()
  const imageRef = useRef()

  useEffect(() => {
    if (!imageLoaded) return

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top top+=60',
      end: `bottom-=${imageRef.current.clientHeight} top+=60`,
      pin: imageRef.current,
    })

    return () => {
      trigger.kill()
    }
  }, [imageLoaded, ref])

  /**
   * Attach listeners to set the imageLoaded state.
   */
  useEffect(() => {
    if (!imageRef.current) return
    const image = imageRef.current

    function handleImageLoaded() {
      setImageLoaded(true)
    }

    if (image.complete) {
      handleImageLoaded()
    } else {
      image.addEventListener('load', handleImageLoaded)
    }

    return () => {
      if (!image) return
      image.removeEventListener('load', handleImageLoaded)
    }
  }, [])

  /**
   * Animate the textbox in.
   */
  useEffect(() => {
    let tween = gsap.to(textRef.current, {
      duration: 1,
      opacity: 1,
      y: 0,
    })
    const trigger = ScrollTrigger.create({
      trigger: textRef.current,
      start: 'top bottom-=100px',
      end: 'bottom top+=100px',
      animation: tween,
      toggleActions: 'play reverse play reverse',
    })
    return () => {
      trigger.kill()
    }
  }, [])

  return (
    <article
      ref={ref}
      className={`${classes.project} ${className || ''}`}
    >
      <div ref={textRef} className={classes.textbox}>

        <h2 className={classes.title}>{title}</h2>

        <div className={classes.description}>{description}</div>

        <div
          className={classes.text}
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>

        <div className={classes.technologies}>
          <h3>Technologies Used</h3>
          <ul>
            {technologies.map((technology) => {
              return <li key={technology}>{technology}</li>
            })}
          </ul>
        </div>

        {links && (
          <div className={classes.links}>
            <h3>Links</h3>
            <ul>
              {links.map((link) => {
                return (
                  <li key={link}>
                    <a href={link}>{link}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
      <div className={classes.imagebox}>
        <img
          ref={imageRef}
          src={featuredImage.childImageSharp.fluid.src}
          alt={title}
          style={{ maxWidth: '100%' }}
        ></img>
      </div>
    </article>
  )
})

export default Project