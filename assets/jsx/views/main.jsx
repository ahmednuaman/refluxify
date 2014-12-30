var BS = require('react-bootstrap'),
    React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <BS.Navbar className='navbar-inverse navbar-fixed-top'>
          <BS.Nav>
            <span className='navbar-brand'>
              Refluxify
            </span>
          </BS.Nav>
        </BS.Navbar>
        <div className='container-fluid'>
          <BS.Jumbotron className='text-center'>
            <div className='container'>
              <h1>Go refluxify yo'self</h1>
              <h4>
                A <a href='http://yeoman.io'>Yeoman</a> generator 
                for <a href='http://facebook.github.io/react/'>React</a>/
                <a href='http://facebook.github.io/flux/'>Flux</a> development 
                using <a href='http://browserify.org/'>Browserify</a> and <a href='http://gulpjs.com/'>Gulp</a>
              </h4>
            </div>
          </BS.Jumbotron>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
              <h3>What is this?</h3>
              <p>
                This is a little generator that'll allow you to quickly set up a React on Flux application 
                that uses Browserify and is built with Gulp. Getting front-end apps bootstrapped is always a 
                pain so IMHO generators are a great way to templatify development.
              </p>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
              <h3>How to install</h3>
              <p>Install Yeoman and the generator:</p>
              <pre>
                ᐅ npm install -g yo generator-refluxify
              </pre>
              <p>Create a folder and <code>cd</code> into it:</p>
              <pre>
                ᐅ mkdir my-cool-ass-app && cd $_
              </pre>
              <p>Run the generator:</p>
              <pre>
                ᐅ yo refluxify
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
