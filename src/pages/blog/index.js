import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import PageHero, { HeroTitle } from "../../components/PageHero";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <PageHero className="add-navbar-margin" image="/img/blog-index.jpg">
          <HeroTitle>
            Latest Stories
          </HeroTitle>
        </PageHero>
        <section>
          <div className="container">
            <BlogRoll />
          </div>
        </section>
      </Layout>
    );
  }
}
