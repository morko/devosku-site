import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from 'react-jss'
import useStyles from './index.styles'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function Project(props) {
  const { children, className, title, featuredImage } = props

  const theme = useTheme()
  const classes = useStyles({ theme })

  const [imageLoaded, setImageLoaded] = useState(false)

  const containerRef = useRef()
  const imageRef = useRef()

  useEffect(() => {
    if (!imageLoaded) return

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top+=40',
      end: 'bottom center',
      pin: imageRef.current,
      scrub: true,
      toggleActions: 'play pause resume reset',
    })

    return () => {
      trigger.kill()
    }
  }, [imageLoaded])

  useEffect(() => {
    if (!imageRef.current) return
    const image = imageRef.current;

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

  return (
    <article
      ref={containerRef}
      className={`${classes.project} ${className || ''}`}
    >
      <div className={classes.textbox}>
        <div className={classes.dots}>
          <span />
          <span />
          <span />
        </div>
        <h2 className={classes.title}>{title}</h2>
        <div className={classes.text}>{children}</div>
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
}
