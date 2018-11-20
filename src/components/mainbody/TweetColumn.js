import React, { Component } from "react";
import axios from "axios";
import dateformat from 'dateformat'

class TweetColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }

  getTweets() {
    let count = 30;
    let screen_name = this.props.accountName;
    let baseUrl = `http://localhost:7890/1.1/statuses/user_timeline.json?count=${count}&screen_name=${screen_name}`;
    return axios.get(baseUrl).then(res => {
      const tweets = res.data;
      this.setState({ tweets });
    });
  }

  componentWillMount() {
    this.getTweets();
  }

  // componentDidMount() {
  //   this.getTweets()
  // }

  render() {
    console.log(this.state.tweets);
    return (
      <div className="col-md-4 p-1">
        <h2 className="lead">Tweets from {this.props.accountName}</h2>
        {this.state.tweets.map((tweet, index) => (
          <div className="tweetbox p-2" key={tweet.id}>
            <div className="tweet_text">{tweet.text}</div>
            {/* <div className="tweet_url">{tweet.entities.urls.url}</div> */}
            <div className="tweet_date">{dateformat(tweet.created_at, "mmm dS, yyyy, h:MM TT")}</div>
          </div>
        ))}
      </div>
    );
  }
}
export default TweetColumn;
