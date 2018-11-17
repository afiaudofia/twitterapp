import React, { Component } from 'react'

export default class TweetColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
    
  }
    
  componentWillMount() {
    let count = 30;
    let screen_name = this.props.accountName;
    fetch("http://localhost:7890/1.1/statuses/user_timeline.json?count=" + count + "&screen_name=" + screen_name )
    .then(response => response.json())
    .then(tweets => this.setState({ tweets }));
  }
  
  render() {
    console.log(this.state.tweets);
    return (
      <div className="col-md-4 m-0 p-1">
      <h2 className="lead">Tweets from { this.props.accountName }</h2>
      {this.state.tweets.map((tweet, index) => (
        <div className="tweetbox p-2" key={tweet.id}>
              <a href="#">
              <div className="tweet_text">{tweet.text}</div>
              {/* <div className="tweet_url">{tweet.entities[0]}</div> */}
              <div className="tweet_date">{tweet.created_at.toLocaleDateString()}</div>
              </a>
        </div>
        ))}
      </div>
    )
  }
}
