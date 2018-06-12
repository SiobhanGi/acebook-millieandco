import React from 'react'

export class AddPost extends React.Component {
  handleClick(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form method="post">
        <label htmlFor="content">Add post:</label>
        <input type="text" name="content" />
        <input type="button" onClick={this.handleClick} value="Submit" />
      </form>
    );
  }
}
