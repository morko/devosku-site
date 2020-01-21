import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import Jumbotron, { HeroTitle } from "../../components/Jumbotron";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout className="add-navbar-margin">
        <Jumbotron image="/img/blog-index.jpg">
          <HeroTitle>
            Latest Stories
          </HeroTitle>
        </Jumbotron>
        <section>
          <div className="container">
            <BlogRoll />
          </div>
        </section>
      </Layout>
    );
  }
}
