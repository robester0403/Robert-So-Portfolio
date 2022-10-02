import React from "react";

interface Props {
  scroll: (id: string) => void;
}

const Home: React.FC<Props> = ({ scroll }) => {
  return <div>Home</div>;
};

export default Home;
