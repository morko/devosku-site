import React from 'react'
import Layout from '../../components/Layout'
import Jumbotron, { JumboTitle } from '../../components/Jumbotron'
import ContactForm from '../../components/ContactForm'
import './index.scss'

export default function Contact() {
  return (
    <Layout className="add-navbar-margin">
      <div className="contact-page">
        <Jumbotron type="full">
          <JumboTitle position="center">Waiting for your contact...</JumboTitle>
          <ContactForm />
        </Jumbotron>
        <section className="container"></section>
      </div>
    </Layout>
  )
}
