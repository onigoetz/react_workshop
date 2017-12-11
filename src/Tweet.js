import React from 'react';

export default class Tweet extends React.Component {
  render() {
    return <div className="Tweet">
      <strong>You <small>@me</small></strong>
      <p>{this.props.content}</p>
    </div>;
  }
}