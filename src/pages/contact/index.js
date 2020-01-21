import React from "react";
import Layout from "../../components/Layout";
import Jumbotron, { HeroTitle } from "../../components/Jumbotron";
import ContactForm from "../../components/ContactForm";
import "./index.scss";

export default function Contact() {
  return (
    <Layout className="add-navbar-margin">
      <div className="contact-page">
        <Jumbotron type="full">
          <HeroTitle position="center">Waiting for your contact...</HeroTitle>
          <ContactForm />
        </Jumbotron>
        <section className="container">
        </section>
      </div>
    </Layout>
  );
}
