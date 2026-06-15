import React from "react";
import { Helmet } from "react-helmet";

export default function SEO({ title, description }) {
  const fallbackTitle = "Molland Angus";
  const fallbackDescription =
    "Molland Angus – Angus frå fjord- og fjellandskap.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: fallbackTitle,
    description: fallbackDescription,
    url: "https://molland-angus.no",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mollandsmarki 493",
      postalCode: "6869",
      addressRegion: "Sogn og Fjordane",
      addressLocality: "Luster",
      addressCountry: "NO",
    },
  };

  return (
    <Helmet>
      <html lang="no" />
      <title>{title || fallbackTitle}</title>
      <meta
        name="description"
        content={description || fallbackDescription}
      />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
