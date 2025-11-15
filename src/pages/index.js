import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css";

const IndexPage = () => {
  return (
    <Layout>
      {/* HERO – SAMME RAMME SOM INNHOLDSSIDENE */}
      <div className="hero-banner-wrapper">
        <div className="hero-banner">
          <StaticImage
            src="../images/hero-fjord-cow.png"
            alt="Molland Angus fjordillustrasjon med okse"
            placeholder="blurred"
            layout="constrained"
            className="hero-banner-image"
          />
        </div>
      </div>

      {/* TEKSTDELEN UNDER HERO */}
      <section
        style={{
          textAlign: "center",
          padding: "3rem 1.5rem 4rem",
          background: "#F7F2E8",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>
          Molland Angus
        </h1>

        <p
          style={{
            fontSize: "1.1rem",
            maxWidth: "500px",
            margin: "0 auto",
            color: "#444",
          }}
        >
          Garden Molland ligg på Mollandsmarki, med utsikt over fjorden og bratte vestlandsfjell i ryggen. Garden har vore driven i mange generasjonar, og dei siste 40 åra har me satsa spesielt på Aberdeen Angus.
        </p>

      </section>
    </Layout>
  );
};

export default IndexPage;
