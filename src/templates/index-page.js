import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';
import PageHeadline from '../components/PageHeadline';

function createBlurbs({ blurbs, color = '#333' }) {
  let blurbElements = blurbs.map(blurb => {
    let lines = blurb.lines.map(line => {
      return <li key={line}>{line}</li>;
    });
    return (
      <div className="page-headline__blurb" key={blurb.title}>
        <h3
          className=" has-text-weight-bold"
          style={{ color, textTransform: 'uppercase' }}
        >
          {blurb.title}
        </h3>
        <ul className=" has-text-weight-bold" style={{ color }}>
          {lines}
        </ul>
      </div>
    );
  });
  return blurbElements;
}

export const IndexPageTemplate = ({
  image,
  title,
  leftBlurbs,
  rightBlurbs,
  mainpitch,
  description,
  intro
}) => (
  <div>
    <PageHeadline image={image}>
      <div className="container" style={{ height: '60%' }}>
        <div className="columns">
          <div className="column">
            {createBlurbs({ blurbs: leftBlurbs, color: '#333' })}
          </div>
          <div className="column is-half"></div>
          <div className="column">
            {createBlurbs({ blurbs: rightBlurbs, color: '#DDD' })}
          </div>
        </div>
      </div>
    </PageHeadline>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {title}
                    </h3>
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
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  leftBlurbs: PropTypes.object,
  rightAd: PropTypes.object,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
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
        image={frontmatter.image}
        leftBlurbs={frontmatter.leftBlurbs}
        rightBlurbs={frontmatter.rightBlurbs}
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        leftBlurbs {
          title
          lines
        }
        rightBlurbs {
          title
          lines
        }
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
        main {
          heading
          description
        }
      }
    }
  }
`;
