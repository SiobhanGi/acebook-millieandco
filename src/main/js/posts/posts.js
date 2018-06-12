import React from 'react';
import Post from './post'

import { AddPost } from './addPost'

const defaultProps = {
    posts: []
};

class Posts extends React.Component {
	render() {
		var posts = this.props.posts.map(post =>
			<Post key={post._links.self.href} post={post}/>
		);
		return (
      <article className='posts-main'>
        <h1 className='posts-title'>
          Posts
        </h1>
        <AddPost />
  			<div className='posts-items'>
  				{posts}
  			</div>
      </article>
		)
	}
}

Posts.defaultProps = defaultProps;

export default Posts;
