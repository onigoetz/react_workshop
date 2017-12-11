import React from 'react';
import { render } from 'react-dom';
import "./style.css";

class Tweet extends React.Component {
  render() {
    return <div className="Tweet">
      <strong>You <small>@me</small></strong>
      <p>{this.props.content}</p>
    </div>;
  }
}

class Tweetbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { focused: false, text: "" };
  }

  handleFocus = () => {
    this.setState({ focused: true });
  }

  handleBlur = () => {
    this.setState({ focused: false });
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  }

  handleClick = () => {
    this.props.onSubmit(this.state.text)
    this.setState({ text: "" });
  }

  renderActions() {
    if (!this.state.focused && this.state.text == "") {
      return;
    }

    return <div className="Tweetbox__actions">
      <span className="Tweetbox__counter">{140 - this.state.text.length}</span>
      <input type="submit" value="Tweet" onClick={this.handleClick} disabled={this.state.text == ""} />
    </div>;
  }

  render() {
    return <div className="Tweetbox">
      <textarea placeholder="What's on your mind ?" onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange} value={this.state.text} />
      {this.renderActions()}
    </div>
  }
}

class Tweets extends React.Component {
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
      {this.state.tweets.map((tweet) => <Tweet content={tweet} />)}
      <Tweetbox onSubmit={this.handleSubmit} />
    </div>;
  }
}

render(
  <Tweets tweets={["Hello world", "This workshop is awesome"]} />,
  document.getElementById("root")
);
