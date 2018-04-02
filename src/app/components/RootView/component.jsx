import React from 'react';
import { Link } from 'fans-router';
import Counter from '../Counter/container';


const RootView = () => (
  <div className="RootView">
    <h1 className="App__title">Spark!</h1>
    <h2 className="App__subtitle">Yet another React boilerplate.</h2>
    <Counter />
    <div className="App__links">
      <Link href="/about" to="/about">About</Link>
    </div>
    <a className="App__github" href="https://github.com/tomzmtl/spark" target="blank">
      <img
        className="App__github-img"
        src="/public/images/github-logo.png"
        alt="See GitHub repo"
      />
    </a>
  </div>
);

export default RootView;
