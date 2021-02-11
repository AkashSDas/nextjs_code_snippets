import { GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import NavBar from "../../components/nav";

// ==========================================
// Your page content depends on external data
// ==========================================

// fetching jokes from Chuck Norris api

interface Props {
  jokes: string[];
}

const UsingGetStaticProps: React.FC<Props> = ({ jokes }: Props) => {
  return (
    <div>
      <NavBar />

      <h1>getStaticProps</h1>

      <h3>Chuck Norris jokes</h3>

      <pre>
        {jokes.map((joke, i) => (
          <div key={i}>
            {i} - {joke}
          </div>
        ))}
      </pre>
    </div>
  );
};

// To fetch this data on pre-render, Next.js allows you to export an async
// function called getStaticProps from the same file. This function gets
// called at build time and lets you pass fetched data to the page's props
// on pre-render.

// This function gets called at build time
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext<ParsedUrlQuery>
): Promise<{
  props: Props;
}> => {
  let jokes: string[] = [];

  // Call an external API endpoint to get posts
  for await (let _ of Array(10)) {
    await fetch("https://api.chucknorris.io/jokes/random")
      .then((data) => data.json())
      .then((joke) => {
        jokes.push(joke["value"]);
      })
      .catch((err) => console.log(err));
  }

  // By returning { props: jokes }, the UsingGetStaticProps
  // component will receive `jokes` as a prop at build time
  return {
    props: {
      jokes: jokes,
    },
  };
};

export default UsingGetStaticProps;
