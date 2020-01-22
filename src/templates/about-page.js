import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Jumbotron, { JumboTitle } from '../components/Jumbotron'
import Container from '../components/Container'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import myFace from '../img/myface1.png'

import './about-page.scss'

export const AboutPageTemplate = ({
  title,
  image,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  console.log(myFace)
  return (
    <div className="about-page">
      <Jumbotron type="medium" image={image}>
        <JumboTitle>{title}</JumboTitle>
        <PreviewCompatibleImage
          imageInfo={{
            alt: 'Photo of Oskari Pöntinen by Jouni Tyrisevä',
            image: myFace,
          }}
        />
      </Jumbotron>
      <section className="me-section">
        <Container>
          <PageContent className="content" content={content} />
        </Container>
      </section>
      <section className="credit-section">
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
        image={post.frontmatter.image}
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
