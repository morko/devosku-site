import React, { useEffect, useRef } from 'react'
import { useTheme } from 'react-jss'
import useStyles from './index.styles'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function SectionHeader(props) {
  const { children, className, icon } = props

  const theme = useTheme()
  const classes = useStyles({ theme })
  const headerRef = useRef()

  useEffect(() => {
    let tween = gsap.to(headerRef.current, {
      duration: 1,
      opacity: 1,
      x: 0,
    })

    const trigger = ScrollTrigger.create({
      trigger: headerRef.current,
      start: 'bottom bottom-=100px',
      animation: tween,
    })

    return () => {
      trigger.kill()
    }
  }, [])

  return (
    <header ref={headerRef} className={`${classes.sectionHeader} ${className || ''}`}>
      <span className={classes.icon}>{icon}</span>
      <span className={classes.text}>{children}</span>
    </header>
  )
}
