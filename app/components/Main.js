'use strict';

var React   = require('react');
var hello   = require('./hello');

var Hello = React.createClass({
  render: function() {
    return (
      <h2>Hello {hello.sayHello('React :)')}</h2>
      );
  }
})

React.render(
  <Hello />,
  document.getElementById('content')
);