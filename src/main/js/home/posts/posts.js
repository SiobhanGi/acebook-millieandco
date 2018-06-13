import React from 'react';
import Post from './post'

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
                <div>
                     <table className="table table-striped">
                     <thead>
                         <tr>
                             <th>Message</th><th>Date</th>
                         </tr>
                     </thead>
                     <tbody>{posts}</tbody>
                     </table>
                </div>
                </div>
            </div>
		)
	}
}

Posts.defaultProps = { posts: [] };

export default Posts;
