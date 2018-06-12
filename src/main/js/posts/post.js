import React from 'react';

class Post extends React.Component{
	render() {
		return (

        <tr>
            <td>{this.props.post.content}</td>
            <td>{this.props.post.createdAt}</td>

        </tr>

		)
	}
}

export default Post;
