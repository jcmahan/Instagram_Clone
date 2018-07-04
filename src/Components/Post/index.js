import React, { Component } from "react";
import './post.css';

  class Post extends Component {

  render() {
      let nickname = this.props.nickname; 
      let avatar = this.props.avatar;
      let image = this.props.image; 
      let caption = this.props.caption; 
    return (
      <article className="Post" ref="Post">
        <header>
          <div className="Post-user">
            <div className="Post-user-avatar">
              <img src={avatar} alt={nickname} />
            </div>
            <div className="Post-user-nickname">
              <span>{nickname}</span>
            </div>
          </div>
        </header>
        <div className="Post-image">
          <div className="Post-image-bg">
            <img alt={caption} src={image} />
          </div>
        </div>
        <div className="Post-caption">
          <strong>{nickname} </strong> &nbsp; {caption}
        </div>
      </article>
    );
  }
}

export default Post;