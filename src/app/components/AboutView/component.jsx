import React from 'react';
import { Link } from 'fans-router';


const AboutView = () => (
  <div className="AboutView">
    <h1 className="App__title">About</h1>
    <h2 className="App__subtitle">Much description.</h2>
    <div className="App__links">
      <Link href="/" to="/">Back</Link>
    </div>
  </div>
);

export default AboutView;
