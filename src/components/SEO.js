import React from "react";
import { Helmet } from "react-helmet";

export default function SEO({ title, description }) {
  const fallbackTitle = "Molland Angus";
  const fallbackDescription =
    "Molland Angus – Angus frå fjord- og fjellandskap.";

  return (
    <Helmet>
      <html lang="no" />
      <title>{title || fallbackTitle}</title>
      <meta
        name="description"
        content={description || fallbackDescription}
      />
    </Helmet>
  );
}
