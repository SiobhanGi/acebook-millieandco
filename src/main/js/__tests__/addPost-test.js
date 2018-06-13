import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Post from '../home/posts/post';
import AddPost from '../home/posts/addPost';

Enzyme.configure({adapter: new Adapter()});

describe('#handleChange', () => {
  it('should equal the value', () => {
    const addPost = shallow(
      <AddPost />
    );
    const out = {target: { value: "test"}}
    addPost.instance().handleChange(out)
    expect(addPost.state().value).toEqual('test')
  });
});
