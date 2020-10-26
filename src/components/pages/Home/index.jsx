import React from 'react';
import { Link } from 'react-router-dom';
const Home = (props) => {
  return (
    <>
      Home page!
      <Link to="/">To Home</Link>
      <Link to="/about">To About</Link>
    </>
  );
};

export default Home;
