import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import Jumbotron, { JumboTitle } from '../../components/Jumbotron'
import Container from '../../components/Container'

import './index.scss'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <div className="blog-page">
        <Layout className="add-navbar-margin">
          <Jumbotron type="small" image="/img/blog-index.jpg">
            <JumboTitle>Latest Stories</JumboTitle>
          </Jumbotron>
          <section className="blogroll-section">
            <Container>
              <BlogRoll />
            </Container>
          </section>
        </Layout>
      </div>
    )
  }
}
