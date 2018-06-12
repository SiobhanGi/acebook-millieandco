import React from 'react'

export class AddPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    var newPost = {};
    newPost['content'] = this.state.value
    this.props.createPost(newPost)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <label htmlFor="content">Add post:</label>
        <input className="post-input" type="text" onChange={this.handleChange} value={this.state.value} required />
        <input className="post-submit" type="submit" value="Submit" />
      </form>
    );
  }
}

AddPost.defaultProps = {}
