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
    this.setState({ value: ' ' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div className="col-md-6 .col-md-offset-3">
        <input className="post-input" type="text" placeholder = "Add New Post" onChange={this.handleChange} value={this.state.value} required />
        <input type="submit" value="Submit" />
       </div>
      </form>
    );
  }
}

AddPost.defaultProps = {}
