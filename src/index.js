import React from 'react';
import { render } from 'react-dom';
import "./style.css";

import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Tweet from "./Tweet";
import Tweets from "./Tweets";
import Tweetbox from "./Tweetbox";

function Feed() {
  return <Tweets tweets={["Hello world", "This workshop is awesome"]} />;
}

function Components() {
  return <div>
    <h2>Tweet</h2>
    <Tweet content="this is my tweet." />

    <h2>Tweetbox</h2>
    <Tweetbox />

    <h2>Feed</h2>
    <Feed />
  </div>
}


render(
  <Router>
    <div>
      <Route exact path="/" component={Feed} />
      <Route path="/components" component={Components} />
      <Route path="/test2" component={Feed} />
    </div>
  </Router>,
  document.getElementById("root")
);
