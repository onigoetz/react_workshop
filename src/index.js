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

function Exercice1() {
  return <Tweet content="This is my tweet" />
}

function Exercice2() {
  return <Tweet content="This is my tweet" />
}

function Exercice3() {
  return <div className="Tweets">
    <Tweet content="Hello world" />
    <Tweet content="This workshop is awesome" />
  </div>
}

function Exercice4() {
  return <div className="Tweets">
    <Tweet content="Hello world" />
    <Tweet content="This workshop is awesome" />
  </div>
}

function Exercice5() {
  return <div className="Tweets">
    <Tweet content="Hello world" />
    <Tweet content="This workshop is awesome" />
    <Tweetbox />
  </div>;
}

function Exercice6() {
  return <div className="Tweets">
    <Tweet content="Hello world" />
    <Tweet content="This workshop is awesome" />
    <Tweetbox />
  </div>;
}

function Exercice7() {
  return <div className="Tweets">
    <Tweet content="Hello world" />
    <Tweet content="This workshop is awesome" />
    <Tweetbox onSubmit={(content) => alert(content)} />
  </div>;
}


render(
  <Router>
    <article>
      <Route exact path="/" component={Feed} />
      <Route path="/components" component={Components} />
      <Route path="/exercise1" component={Exercice1} />
      <Route path="/exercise2" component={Exercice2} />
      <Route path="/exercise3" component={Exercice3} />
      <Route path="/exercise4" component={Exercice4} />
      <Route path="/exercise5" component={Exercice5} />
      <Route path="/exercise6" component={Exercice6} />
      <Route path="/exercise7" component={Exercice7} />
      <Route path="/exercise8" component={Feed} />
    </article>
  </Router>,
  document.getElementById("root")
);
