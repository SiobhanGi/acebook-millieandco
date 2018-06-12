const React = require('react');
const client = require('./client');

import Posts from './posts/posts'
import { AddPost } from './posts/addPost'

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = {posts: []};
	}

  componentDidMount() {
    client({method: 'GET', path: '/api/posts'}).then(response => {
      this.setState({posts: response.entity._embedded.posts});
    });
  }

	createPost(post) {
		client({
			method: 'POST',
			path: '/api/posts',
			entity: post,
			headers: {'Content-Type', 'application/json'}
		})
		.then(console.log)
	}

  render() {
    return (<div>
			<AddPost />
      <Posts posts={this.state.posts.reverse()}/>
      </div>
    )
  }
}

export default Home;
