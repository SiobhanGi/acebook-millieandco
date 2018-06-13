import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Login from '../home/login';

Enzyme.configure({adapter: new Adapter()});
  const login = shallow(<Login closeLogin = "test" />);


describe('<Login />', () => {
  it('displays a X', () => {
    expect(login.text()).toEqual('XEmail:Password:');
  });

  it('calls the property on click', () => {
    expect(login.contains(<button onClick="test">X</button>)).toEqual(true)
  });
});
