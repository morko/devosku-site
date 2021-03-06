import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import Jumbotron from '../components/Jumbotron'
import Container from '../components/Container'

import lightBulb from '../img/lightbulb.svg'
import {
  color4 as hlColor,
  color5 as darkHlColor,
} from '../scss/_variables.module.scss'
import { textHighlight } from '../utils'
import keyboard from '../img/keyboard.jpg'
import compCables from '../img/comp-cables.jpg'
import './index-page.scss'
import SectionHeader from '../components/SectionHeader'
import useElementOnViewport from '../hooks/useElementOnViewport'

export const IndexPageTemplate = ({
  title,
  description,
  headline,
  featuredServices,
  featuredTechnologies,
  intro,
  blurbs,
}) => {
  const servicesRef = useRef(null)
  const technologiesRef = useRef(null)
  const servicesOnView = useElementOnViewport(servicesRef, true)
  const technologiesOnView = useElementOnViewport(technologiesRef, true)

  return (
    <div className="index-page">
      <Jumbotron
        className="header-section"
        image={keyboard}
        backgroundOverlay="0.6"
        showScroll={true}
      >
        <div className="row">
          <div className="anim-wrap">
            <h1
              className="title"
              dangerouslySetInnerHTML={{
                __html: textHighlight(headline.title, hlColor),
              }}
            />
          </div>
          <hr />
          <div className="anim-wrap">
            <h2
              className="subtitle"
            >
              Hold on... This site is still under construction.
            </h2>
          </div>
        </div>
      </Jumbotron>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  headline: PropTypes.object,
  featuredServices: PropTypes.array,
  featuredTechnologies: PropTypes.array,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter, fields } = data.markdownRemark

  return (
    <Layout transparentNavbar={true}>
      <IndexPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        headline={frontmatter.headline}
        featuredServices={frontmatter.featuredServices}
        featuredTechnologies={frontmatter.featuredTechnologies}
        intro={frontmatter.intro}
        blurbs={fields.blurbs}
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
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        description
        headline {
          title
          subtitle
        }
        featuredServices
        featuredTechnologies
        intro {
          heading
          description
        }
      }
      fields {
        blurbs {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 512, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          text
        }
      }
    }
  }
`
