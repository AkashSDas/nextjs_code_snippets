import { GetServerSideProps } from "next";
import React from "react";

interface Props {
  value: string;
  firstName: string;
  lastName: string;
  joke: string;
}

const Index: React.FC<Props> = (props: Props) => {
  const [joke, setJoke] = React.useState("");

  const getJoke = async (): Promise<void> => {
    let data = await fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .catch((err) => console.log(err));
    setJoke(data.value);
  };

  React.useEffect(() => {
    getJoke();
  }, []);

  return (
    <div>
      <h1>Hello world</h1>
      {props.value}
      <br />
      {props.firstName} {props.lastName}
      <br />
      Value from CSR: {joke}
      <br />
      Value from SSR: {props.joke}
      <br />
      <strong>
        SSR loads things as pages loads and CSR loads things when page is loaded
      </strong>
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

export default Index;
