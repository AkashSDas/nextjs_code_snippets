import fs from "fs";
import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import NavBar from "../../../components/nav";

interface Props {
  files: string[];
}

const UsingGetStaticPaths: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <NavBar />

      <h1>getStaticPaths</h1>

      <pre>
        {props.files.map((file, i) => (
          <div key={i}>
            <Link href={`using-getStaticPaths/${file.replace(".md", "")}`}>
              <a>{file}</a>
            </Link>
          </div>
        ))}
      </pre>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Props;
}> => {
  const files: string[] = fs.readdirSync("./src/posts");

  return {
    props: {
      files: files,
    },
  };
};

export default UsingGetStaticPaths;
