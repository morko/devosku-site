import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Jumbotron, { JumboTitle } from '../components/Jumbotron'
import Container from '../components/Container'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import './about-page.scss'

export const AboutPageTemplate = ({
  title,
  jumbotronBackgroundImage,
  jumbotronImage,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
    <div className="about-page">
      <Jumbotron
        type="huge"
        image={jumbotronBackgroundImage}
        backgroundOverlay="0.6"
      >
        <JumboTitle>{title}</JumboTitle>
        <PreviewCompatibleImage
          imageInfo={{
            alt: 'Photo of Oskari Pöntinen by Jouni Tyrisevä',
            image: jumbotronImage,
          }}
          className="my-face"
        />
      </Jumbotron>
      <section className="content-section">
        <Container>
          <PageContent className="content" content={content} />
        </Container>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout className="add-navbar-margin">
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        jumbotronBackgroundImage={post.frontmatter.jumbotronBackgroundImage}
        jumbotronImage={post.frontmatter.jumbotronImage}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        jumbotronBackgroundImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        jumbotronImage {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
