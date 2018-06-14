import React from 'react';
import ReactDOM from 'react-dom';

import Home from './home/home';
import Signup from './signup/signup';
import Login from './login/login';

import { BrowserRouter as Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <Switch>
	  <div>
		  <Route exact path={"/"} component = {Home} />
		  <Route path={"/signup"} component = {Signup} />
		  <Route path={"/login"} component = {Login} />
	  </div>
  </Switch>,
	document.getElementById('app')
)
