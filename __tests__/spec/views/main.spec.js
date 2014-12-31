var file = '../../../assets/jsx/views/main.jsx';

jest.dontMock(file);
describe('Views/Main', function () {
  var Main = require(file),
      React = require('react/addons'),
      TestUtils = React.addons.TestUtils;

  it('should have a title in the hero', function () {
    var main = TestUtils.renderIntoDocument(<Main />),
        title = TestUtils.findRenderedDOMComponentWithTag(main, 'h1');

    expect(title.getDOMNode().textContent).toEqual('Go refluxify yo\'self');
  });
});
