import React, { Component } from "react";

let date = new Date();
class Posts extends Component {
  state = {
    feeds: [
      {
        id: "1",
        postBy: "Muhammad Sohail",
        profilePicture: "",
        date: date,
        timestamp: Date.now(),
        image: "image path",
        caption: "Hello this is Sohail's post!",
      },
      {
        id: "2",
        postBy: "Muhammad Saeed",
        profilePicture: "",
        date: date,
        timestamp: Date.now(),
        image: "image path",
        caption: "Hello this is Sohail's post!",
      },
    ],
  };
  render() {
    return (
      <div className="post-card">
        {this.state.feeds.map((post) => (
          <div className="post" key={post.id}>
            <h1>{post.caption}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
