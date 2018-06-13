import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Posts from '../posts/posts';

Enzyme.configure({adapter: new Adapter()});

class FakePost extends React.Component {
  render() {
    return(
      <div>Test</div>
    );
  }
}

Posts.__Rewire__('Post', FakePost)

describe('<Posts />', () => {
  it('displays a title', () => {
    const posts = shallow(<Posts />);

    expect(posts.text()).toEqual('PostsMessageDate');
  });

  it('renders multiple posts', () => {
    const post = {_links: {self: {href: 'test'}}}
    const posts = shallow(<Posts posts={ [post, post, post] } />);

    expect(posts.find(FakePost).length).toEqual(3);
  });
});
