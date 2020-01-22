import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Jumbotron, { HeroTitle } from '../components/Jumbotron'

export const ProjectPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  fullImage,
}) => (
  <div className="project-page">
    <Jumbotron className="add-navbar-margin" image={image}>
      <HeroTitle>{title}</HeroTitle>
    </Jumbotron>
    <section>
      <div className="container">
        <h3>{heading}</h3>
        <p>{description}</p>
        <Features gridItems={intro.blurbs} />
        <h3 className="has-text-weight-semibold is-size-3">{main.heading}</h3>
        <p>{main.description}</p>
        <article className="tile is-child">
          <PreviewCompatibleImage imageInfo={main.image1} />
        </article>
        <article className="tile is-child">
          <PreviewCompatibleImage imageInfo={main.image2} />
        </article>
        <article className="tile is-child">
          <PreviewCompatibleImage imageInfo={main.image3} />
        </article>
        <div
          className="full-width-image-container"
          style={{
            backgroundImage: `url(${
              fullImage.childImageSharp
                ? fullImage.childImageSharp.fluid.src
                : fullImage
            })`,
          }}
        />
      </div>
    </section>
  </div>
)

ProjectPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const ProjectPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProjectPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        fullImage={frontmatter.full_image}
      />
    </Layout>
  )
}

ProjectPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProjectPage

export const projectPageQuery = graphql`
  query ProjectPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        full_image {
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
