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
    <div className="panel panel-default">
        <div className="panel-heading">
            <h1>Posts</h1>
        </div>
        <div className="panel-body">
      <form onSubmit={this.handleSubmit} >
        <label htmlFor="content">Add post:</label>
        <input type="text" onChange={this.handleChange} value={this.state.value} required />
        <input type="submit" value="Submit" />
      </form>
      </div>
    </div>
    );
  }
}

AddPost.defaultProps = {}
