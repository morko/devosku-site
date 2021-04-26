import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useTheme } from 'react-jss'
import SectionHeader from '../../components/SectionHeader'
import useStyles from './ProjectsSection.styles'
import { IoMdHammer } from 'react-icons/io'
import Container from '../../components/Container'
import Project from '../../components/Project'
import SectionProgressBar from '../../components/SectionProgressBar'
import throttle from 'lodash/throttle'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useWindowDimensions from '../../hooks/useWindowDimensions'

gsap.registerPlugin(ScrollTrigger)

function getCurrentTopScrollPosition() {
  return (
    (window.pageYOffset || document.documentElement.scrollTop) -
    (document.documentElement.clientTop || 0)
  )
}

export default function ProjectsSection(props) {
  const { projects } = props
  const theme = useTheme()
  const classes = useStyles({ theme })

  const progressBarHeight = 200

  const containerRef = useRef()
  const progressBarRef = useRef()

  const windowDimensions = useWindowDimensions()

  const showProgressBar = windowDimensions.width > 1600

  useEffect(() => {
    if (!showProgressBar) {
      return
    }
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top+=100',
      end: `bottom-=${progressBarHeight} top+=100`,
      pin: progressBarRef.current,
    })

    return () => {
      trigger.kill()
    }
  }, [showProgressBar])

  /**
   * Percent of the Project section the viewport is scrolled to.
   */
  const [scrollPercent, setScrollPercent] = useState(0)

  const updateScrollPercent = useCallback(() => {
    const rect = containerRef.current.getBoundingClientRect()
    if (rect.top > 0) {
      setScrollPercent(0)
    } else if (rect.top < -rect.height) {
      setScrollPercent(1)
    } else {
      const scrollPosition =
        getCurrentTopScrollPosition() - containerRef.current.offsetTop
      setScrollPercent(scrollPosition / rect.height)
    }
  }, [setScrollPercent])

  useEffect(() => {
    if (!showProgressBar) {
      return
    }
    const throttledUpdateScrollPercent = throttle(updateScrollPercent, 25)
    window.addEventListener('scroll', throttledUpdateScrollPercent)
    return () => {
      window.removeEventListener('scroll', throttledUpdateScrollPercent)
    }
  }, [updateScrollPercent, showProgressBar])

  const projectRefs = useRef([])

  const projectComponents = useMemo(() => {
    const projectComponents = []

    projects.forEach((el, i) => {
      const { id, frontmatter } = el.node
      if (!projectRefs.current[i]) {
        projectRefs.current[i] = React.createRef()
      }

      projectComponents.push(
        <Project
          key={id}
          title={frontmatter.title}
          featuredImage={frontmatter.featuredImage}
          description={frontmatter.description}
          html={el.node.html}
          technologies={frontmatter.technologies}
          links={frontmatter.links}
          ref={projectRefs.current[i]}
        ></Project>
      )
    })
    return projectComponents
  }, [projects])

  const [progressBarDots, setProgressBarDots] = useState([])

  useEffect(() => {
    const containerRect = containerRef.current.getBoundingClientRect()
    const offset = theme.fixedHeaderHeight - 20

    const dots = []
    projectRefs.current.forEach(({ current: el }, i) => {
      const elRect = el.getBoundingClientRect()
      dots.push({
        percent: (elRect.y - containerRect.y - offset) / containerRect.height,
        onClick: () => window.scrollTo(0, elRect.y - offset),
        label: projects[i].node.frontmatter.title
      })
    })
    setProgressBarDots(dots)
  }, [projects, theme.fixedHeaderHeight])

  return (
    <Container id="my-projects" className={classes.projects} ref={containerRef}>
      <SectionProgressBar
        className={classes.progressBar}
        ref={progressBarRef}
        height={progressBarHeight}
        percent={scrollPercent}
        dots={progressBarDots}
        hide={!showProgressBar}
      />

      <SectionHeader className={classes.header} icon={<IoMdHammer />}>
        My Project Highlights
      </SectionHeader>

      {projectComponents}
    </Container>
  )
}
