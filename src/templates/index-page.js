import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import PageHero from "../components/PageHero";
import Container from "../components/Container";

import lightBulb from "../img/lightbulb.svg";
import {
  color4 as hlColor,
  color5 as darkHlColor
} from "../scss/_variables.scss";
import { textHighlight } from "../utils";
import programmerAtWork from "../img/programmer-at-work.svg";
import "./index-page.scss";
import SectionHeader from "../components/SectionHeader";

export const IndexPageTemplate = ({
  title,
  description,
  headline,
  featuredServices,
  featuredTechnologies,
  intro
}) => (
  <div className="index-page">
    <PageHero>
      <img src={programmerAtWork} alt="Programmer at Work" />
      <Container className="wrapper">
        <div className="row">
          <h1
            className="title"
            dangerouslySetInnerHTML={{
              __html: textHighlight(headline.title, hlColor)
            }}
          />
          <h2
            className="subtitle"
            dangerouslySetInnerHTML={{
              __html: textHighlight(headline.subtitle, hlColor)
            }}
          />
        </div>
        <div className="row">
          {featuredServices.map(i => (
            <h3 className="featured-services">{i}</h3>
          ))}
          <div className="column" />
        </div>
        <div className="row">
          {featuredTechnologies.map(i => (
            <h3 className="featured-technologies">{i}</h3>
          ))}
        </div>
        <div className="contact">
          <Link className="btn" to="/contact">
            Contact
          </Link>
        </div>
      </Container>
    </PageHero>

    <section className="features-section">
      <SectionHeader>
        <img alt="light bulb" src={lightBulb}></img>
        <h2
          dangerouslySetInnerHTML={{
            __html: textHighlight(intro.heading, darkHlColor)
          }}
        />
      </SectionHeader>
      <Container>
        <Features gridItems={intro.blurbs} />
        <Link className="btn" to="/projects">
          See my projects
        </Link>
      </Container>
    </section>
    <section className="latest-posts-section">
      <SectionHeader type="small">
        <h3
          dangerouslySetInnerHTML={{
            __html: textHighlight("Latest [hl]Posts[/hl]", darkHlColor)
          }}
        />
      </SectionHeader>
      <Container>
        <BlogRoll />
        <Link className="btn" to="/blog">
          Read more
        </Link>
      </Container>
    </section>
  </div>
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
            title
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
