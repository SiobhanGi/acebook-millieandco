import React from 'react';
import Post from './post'

const defaultProps = {
    posts: []
};

class Posts extends React.Component {
	render() {
		var posts = this.props.posts.map(post =>
			<Post key={post._links.self.href} post={post}/>
		);
		return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h1>Posts</h1>
                </div>
                <div className="panel-body">
                  <article className='posts-main'>
                        <div className="panel-body">
                        <div className='posts-items'>
                            {posts}
                        </div>
                        </div>
                  </article>
                </div>
            </div>
		)
	}
}

Posts.defaultProps = defaultProps;

export default Posts;
