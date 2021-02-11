import fs from "fs";
import matter from "gray-matter";
import marked from "marked";
import Head from "next/head";
import path from "path";
import React from "react";
import NavBar from "../../../components/nav";

// ==========================================
// Your page paths depend on external data
// ==========================================

interface Props {
  // content: string;
  htmlString: string;
  data: {
    [key: string]: any;
  };
}

const UsingGetStaticPaths: React.FC<Props> = ({ htmlString, data }: Props) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
      </Head>

      <NavBar />

      <h1>getStaticPaths</h1>

      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    </>
  );
};

// your page paths that are pre-rendered depend on external data.
// To handle this, Next.js lets you export an async function called
// getStaticPaths from a dynamic page. This function gets called at
// build time and lets you specify which paths you want to pre-render.

export async function getStaticPaths() {
  const files = fs.readdirSync("./src/posts");

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  console.log(paths);

  return {
    paths: paths,
    fallback: false,
  };
}

// // This function gets called at build time
// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const res = await fetch('https://.../posts')
//   const posts = await res.json()

//   // Get the paths we want to pre-render based on posts
//   const paths = posts.map((post) => `/posts/${post.id}`)

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false }
// }

// // This also gets called at build time
// export async function getStaticProps({ params }) {
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//   const res = await fetch(`https://.../posts/${params.id}`)
//   const post = await res.json()

//   // Pass post data to the page via props
//   return { props: { post } }
// }

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  console.log(params);

  const markdownWithMetaData = fs
    .readFileSync(path.join(".", "src", "posts", params.slug + ".md"))
    .toString();

  const parsedMarkdown = matter(markdownWithMetaData);
  const htmlString = marked(parsedMarkdown.content);

  return {
    props: {
      // content: parsedMarkdown.content,
      htmlString,
      data: parsedMarkdown.data,
    },
  };
}

export default UsingGetStaticPaths;
