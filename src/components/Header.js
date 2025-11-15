import * as React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header
      style={{
        background: "#f7f2e8",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
        marginBottom: "1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "1.2rem 1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ fontWeight: 800, fontSize: "1.4rem" }}>
          MOLLAND ANGUS
        </Link>
        <nav style={{ display: "flex", gap: "1.5rem", fontSize: "0.95rem" }}>
          <Link to="/about">Om garden</Link>
          <Link to="/products">Produkt</Link>
          <Link to="/contact">Kontakt</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
