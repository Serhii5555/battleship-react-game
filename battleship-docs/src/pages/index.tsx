// src/pages/index.js
import React from "react";
import Layout from "@theme/Layout";

export default function Home() {
  return (
    <Layout title="Home" description="Welcome to my site!">
      <main style={{ textAlign: "center", padding: "20rem" }}>
        <h1>Welcome to My Docusaurus Site</h1>
        <h1>
          <a href="/docs/intro">Get Started</a>
        </h1>
      </main>
    </Layout>
  );
}
