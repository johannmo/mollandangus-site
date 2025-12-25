import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css";

/**
 * Velger riktig bilde til innholdssidene.
 * Alle får className="hero-banner-image" og legges inni samme hero-ramme
 * som forsiden, så de blir like høye og brede.
 */
const heroImageFor = (hero) => {
  switch (hero) {
    case "farm":
      return (
        <StaticImage
          src="../images/farm-main.png"
          alt="Mollands-garden sett frå bakkane"
          placeholder="blurred"
          layout="constrained"
          className="hero-banner-image"
        />
      );
    case "animals":
      return (
        <StaticImage
          src="../images/beitande-dyr-2.png"
          alt="Beitande angusfe"
          placeholder="blurred"
          layout="constrained"
          className="hero-banner-image"
        />
      );
    case "yard":
      return (
        <StaticImage
          src="../images/yard-summer.png"
          alt="Gardsplass med raud bu og hagemøblar"
          placeholder="blurred"
          layout="constrained"
          className="hero-banner-image"
        />
      );
    default:
      // Fallback: bruk samme fjordillustrasjon som forsiden
      return (
        <StaticImage
          src="../images/hero-fjord-cow.png"
          alt="Angusfe og fjordlandskap"
          placeholder="blurred"
          layout="constrained"
          className="hero-banner-image"
        />
      );
  }
};

const ContentPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, hero, description } = frontmatter;

  return (
    <>
      <SEO title={title} description={description} />
      <Layout>
        {/* HERO – IDENTISK RAMME SOM PÅ FORSIDEN */}
        <div className="hero-banner-wrapper">
          <div className="hero-banner">
            {heroImageFor(hero)}
          </div>
        </div>

        {/* INNHOLD */}
        <section
          className="content"
          style={{ maxWidth: "780px", margin: "3rem auto", padding: "0 1.5rem" }}
        >
          <h1 style={{ fontSize: "2.4rem", marginBottom: "0.6rem" }}>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </section>
      </Layout>
    </>
  );
};

export const query = graphql`
  query ContentPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        hero
        description
      }
    }
  }
`;

export default ContentPage;
