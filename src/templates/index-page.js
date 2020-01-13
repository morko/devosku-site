import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import PageHero from "../components/PageHero";

import lightBulb from "../img/lightbulb.svg";
import { color4 as hlColor, color5 as darkHlColor } from "../scss/_colors.scss";
import { textHighlight } from "../utils";
import programmerAtWork from "../img/programmer-at-work.svg";
import "./index-page.scss";
import SectionHeader from "../components/SectionHeader";

export const IndexPageTemplate = ({
  image,
  title,
  description,
  headline,
  featuredServices,
  featuredTechnologies,
  intro
}) => (
  <>
    <PageHero>
      <div className="container hero-wrapper">
        <div className="row">
          <h1
            className="hero-title is-size-1"
            dangerouslySetInnerHTML={{
              __html: textHighlight(headline.title, hlColor)
            }}
          />
          <h2
            className="hero-subtitle is-size-2"
            dangerouslySetInnerHTML={{
              __html: textHighlight(headline.subtitle, hlColor)
            }}
          />
        </div>
        <div className="row">
          {featuredServices.map(i => (
            <h3 className="hero-featured-services is-size-3">{i}</h3>
          ))}
          <div className="column" />
        </div>
        <div className="row">
          {featuredTechnologies.map(i => (
            <h3 className="hero-featured-technologies is-size-3">{i}</h3>
          ))}
        </div>
      </div>
      <img src={programmerAtWork} alt="Programmer at Work" />
      <Link className="btn contact-btn" to="/contact">
        CONTACT
      </Link>
    </PageHero>
    <section className="section">
      <SectionHeader>
        <img src={lightBulb}></img>
        <h3
          className="is-size-2"
          dangerouslySetInnerHTML={{
            __html: textHighlight(intro.heading, darkHlColor)
          }}
        />
      </SectionHeader>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/projects">
                      See all projects
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  headline: PropTypes.object,
  featuredServices: PropTypes.array,
  featuredTechnologies: PropTypes.array,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        headline={frontmatter.headline}
        featuredServices={frontmatter.featuredServices}
        featuredTechnologies={frontmatter.featuredTechnologies}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

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
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 512, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
        }
      }
    }
  }
`;
