import React, { Component } from 'react'
import TweetColumn from './TweetColumn';

export default class MainBody extends Component {
  render() {
    return (
      <div>
        <div className="row">
        <div className="col-12 pb-3">
        <h1 className="lead text-center">
        Using Twitter Api to fetch and display recent tweets from @makeschool, @newsycombinator and @ycombinator.
        </h1>
        </div>
            <TweetColumn accountName="@MakeSchool"/>
            <TweetColumn accountName="@newsycombinator"/>
            <TweetColumn accountName="@ycombinator"/>
        </div>
      </div>
    )
  }
}
