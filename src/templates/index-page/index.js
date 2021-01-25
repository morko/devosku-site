import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Jumbotron from '../../components/Jumbotron'
import Hero from '../../components/Hero'
import ProjectsSection from './ProjectsSection'
import SkillsSection from './SkillsSection'

export const IndexPageTemplate = (props) => {
  const { headline, projects } = props

  return (
    <>
      <Jumbotron variant="500">
        <Hero title={headline.title} subtitle={headline.subtitle} />
      </Jumbotron>
      {projects && <ProjectsSection projects={projects} />}
      <SkillsSection />
    </>
  )
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  headline: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { indexPage, projects } = data

  return (
    <Layout transparentNavbar={true}>
      <IndexPageTemplate
        title={indexPage.frontmatter.title}
        description={indexPage.frontmatter.description}
        headline={indexPage.frontmatter.headline}
        projects={projects.edges}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    indexPage: markdownRemark(
      frontmatter: { templateKey: { eq: "index-page" } }
    ) {
      frontmatter {
        title
        description
        headline {
          title
          subtitle
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "project-page" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            technologies
            links
          }
          html
        }
      }
    }
  }
`
