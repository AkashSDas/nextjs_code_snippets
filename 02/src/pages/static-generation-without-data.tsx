import React from "react";
import NavBar from "../components/nav";

const StaticGenerationWithoutData: React.FC = () => {
  return (
    <div>
      <NavBar />

      <h1>Static Generation without data</h1>

      <pre>
        This page does not need to fetch any external data to be pre-rendered.
        In cases like this, Next.js generates a single HTML file per page during
        build time.
      </pre>
    </div>
  );
};

export default StaticGenerationWithoutData;
