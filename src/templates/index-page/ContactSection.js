import React from 'react'
import SectionHeader from '../../components/SectionHeader'
import Container from '../../components/Container'
import ContactForm from '../../components/ContactForm'
import useTheme from 'react-jss'
import useStyles from './ContactSection.styles'

export default function ContactSection() {

  const theme = useTheme()
  const classes = useStyles({ theme })

  return (
    <Container className={classes.container} id="contact-me" el="section">
      <SectionHeader>
        Contact Me
      </SectionHeader>
      <ContactForm />
    </Container>
  )
}
