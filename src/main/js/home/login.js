import React from 'react';

    const defaultProps = {
        text: ""
    };

 class Login extends React.Component {
  render() {
    return (
      <div className='login'>
        <div className='login_inner'>
          <h1>{ this.props.text } </h1>
        <button onClick={this.props.closeLogin}>close me</button>
        </div>
      </div>
    );
  }
}

export default Login;