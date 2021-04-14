import React from 'react'
import { useTheme } from 'react-jss'
import Container from '../Container'
import useStyles from './index.styles'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import useWindowDimensions from '../../hooks/useWindowDimensions'

function SocialMediaLink(props) {
  const { icon, text, href } = props

  const theme = useTheme()
  const classes = useStyles({ theme })
  const { height } = useWindowDimensions()

  let size = `calc(0.33 * (100vh - (${theme.headerHeight} + ${theme.jumbotronHeight})))`
  if (height < 860) {
    size = '38px'
  }

  return (
    <a className={classes.link} href={href}>
      {React.cloneElement(icon, { size })}
      {' ' + text}
    </a>
  )
}

export default function SocialMediaSection(props) {
  const { className = '', children } = props

  const theme = useTheme()
  const classes = useStyles({ theme })

  return (
    <section className={`${classes.socialMediaSection} ${className}`}>
      <Container className={classes.container}>
        <SocialMediaLink
          icon={<FaGithub />}
          text="GitHub"
          href="https://github.com/morko"
        />
        <SocialMediaLink
          icon={<FaLinkedin />}
          text="LinkedIn"
          href="https://www.linkedin.com/in/oskari-pontinen/"
        />
      </Container>
    </section>
  )
}
