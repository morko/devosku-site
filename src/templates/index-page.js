import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';
import PageHero from '../components/PageHero';

function createBlurbs({ blurbs, color = '#333' }) {
  let blurbElements = blurbs.map(blurb => {
    return (
      <div className="blurb" key={blurb.title}>
        <h3
          className=" has-text-weight-bold"
          style={{ color, textTransform: 'uppercase' }}
        >
          {blurb.title}
        </h3>
        <div className="blurb__text" dangerouslySetInnerHTML={{ __html: blurb.text }} />
      </div>
    );
  });
  return blurbElements;
}

export const IndexPageTemplate = ({
  image,
  title,
  description,
  blurbs,
  headline,
  mainpitch,
  intro
}) => (
  <div>
    <PageHero image={image}>
      <div className="container" style={{ height: '60%' }}>
        <div className="columns">
          <div className="column">
            {createBlurbs({ blurbs, color: '#333' })}
          </div>
          <div className="column is-half"></div>
          <div className="column">
            <h1>{headline.title}</h1>
            <h3>{headline.subtitle}</h3>
          </div>
        </div>
      </div>
    </PageHero>
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
  description: PropTypes.string,
  blurbs: PropTypes.array,
  headline: PropTypes.object,
  mainpitch: PropTypes.object,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        description={frontmatter.description}
        blurbs={frontmatter.blurbs}
        headline={frontmatter.headline}
        mainpitch={frontmatter.mainpitch}
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        description
        blurbs {
          title
          text
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
        headline {
          title
          subtitle
        }
        mainpitch {
          title
          text
        }
      }
    }
  }
`;
