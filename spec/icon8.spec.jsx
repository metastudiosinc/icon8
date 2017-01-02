import React from 'react/addons';
import Icon8 from '../lib/icon8.jsx';

describe('Icon8', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <Icon8/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('icon8');
  });
});
