import React from "react";
import Layout from "../../components/Layout";
import PageHero, { HeroTitle } from "../../components/PageHero";
import ContactForm from "../../components/ContactForm";
import "./index.scss";

export default function Contact() {
  return (
    <Layout>
      <div className="contact-page">
        <PageHero className="add-navbar-margin" type="full">
          <HeroTitle position="center">Waiting for your contact...</HeroTitle>
          <ContactForm />
        </PageHero>
        <section className="container">
        </section>
      </div>
    </Layout>
  );
}
