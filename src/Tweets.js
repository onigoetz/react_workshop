import React from 'react';
import Tweet from "./Tweet";
import Tweetbox from "./Tweetbox";

export default class Tweets extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tweets: props.tweets };
  }

  handleSubmit = (text) => {
    this.setState({
      tweets: this.state.tweets.concat([text])
    });
  }

  render() {
    return <div className="Tweets">
      {this.state.tweets.map((tweet) => <Tweet key={tweet} content={tweet} />)}
      <Tweetbox onSubmit={this.handleSubmit} />
    </div>;
  }
}
