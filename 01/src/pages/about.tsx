import { GetServerSideProps } from "next";
import React from "react";

interface Props {
  value: string;
  firstName: string;
  lastName: string;
  joke: string;
}

const About: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <h1>About us</h1>
      {props.joke}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (): Promise<{
  props: Props;
}> => {
  const data = await fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return {
    props: {
      value: "text is next",
      firstName: "james",
      lastName: "bond",
      joke: data.value,
    },
  };
};

export default About;
