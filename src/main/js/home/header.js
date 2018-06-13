import React from 'react';
import Login from './login';

class Header extends React.Component {
      constructor(props) {
        super(props);
        this.state = { showLogin: false };
        this.toggleLogin = this.toggleLogin.bind(this);
      }
        toggleLogin() {
          this.setState({ showLogin: !this.state.showLogin });
        }

  render() {
    return (
        <div>
            <ul className="nav nav-pills">
              <li className="navbar-right sign" role="presentation"><a className="sign-up" href="/signup">Sign Up</a></li>
              <li className="navbar-right" role="presentation"><a href="#" onClick={this.toggleLogin}>Login</a></li>
              { this.state.showLogin ? <Login closeLogin={this.toggleLogin} /> : null }
            </ul>
        </div>

    );
  }
}

export default Header;

