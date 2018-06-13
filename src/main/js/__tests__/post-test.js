import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Post from '../posts/post';

Enzyme.configure({adapter: new Adapter()});

describe('<Post />', () => {
  it('should display post contents and date', () => {
    const post = shallow(
      <Post post={{
        content: 'Test post - ',
        createdAt: '2018-06-12'
        }}
      />
    );

    expect(post.text()).toEqual('Test post - 2018-06-12')
  });
});
