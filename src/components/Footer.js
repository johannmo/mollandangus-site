import * as React from "react";

const Footer = () => (
  <footer
    style={{
      borderTop: "1px solid rgba(0,0,0,0.05)",
      marginTop: "3rem",
      padding: "1.5rem 1.5rem 3rem",
      textAlign: "center",
      fontSize: "0.9rem",
      color: "#62758a",
    }}
  >
    © {new Date().getFullYear()} Molland Angus | Lokalt, naturleg og ekte.
  </footer>
);

export default Footer;
