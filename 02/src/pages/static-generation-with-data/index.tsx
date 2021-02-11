import Link from "next/link";
import React from "react";
import NavBar from "../../components/nav";

const StaticGenerationWithData: React.FC = () => {
  return (
    <div>
      <NavBar />

      <h1>Static Generation with data</h1>

      <pre>
        Some pages require fetching external data for pre-rendering. There are
        two scenarios, and one or both might apply. In each case, you can use a
        special function Next.js provides:
        <ol>
          <li>
            Your page content depends on external data: Use getStaticProps.{" "}
            <Link href="/static-generation-with-data/using-getStaticProps">
              <a>getStaticProps</a>
            </Link>
          </li>
          <li>
            Your page paths depend on external data: Use getStaticPaths (usually
            in addition to getStaticProps).{" "}
            <Link href="/static-generation-with-data/using-getStaticPaths">
              <a>getStaticPaths</a>
            </Link>
          </li>
        </ol>
      </pre>
    </div>
  );
};

export default StaticGenerationWithData;
