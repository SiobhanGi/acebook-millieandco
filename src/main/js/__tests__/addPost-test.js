import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Post from '../home/posts/post';
import AddPost from '../home/posts/addPost';

Enzyme.configure({adapter: new Adapter()});

describe('</AddPost', () => {
  const addPost = shallow(
    <AddPost createPost = {() => {}}  />
  );
  const out = {target: { value: "test"}};
  const out2 = {preventDefault: () => {}};

  describe('#handleChange', () => {

    it('should equal the value', () => {
      addPost.instance().handleChange(out)
      expect(addPost.state().value).toEqual('test')
    });
  })

  describe('#handleSubmit', () => {

    it('sets the state back to empty', () => {
      addPost.instance().handleChange(out);
      addPost.instance().handleSubmit(out2);
      expect(addPost.state().value).toEqual(' ')
    });
  });

});
